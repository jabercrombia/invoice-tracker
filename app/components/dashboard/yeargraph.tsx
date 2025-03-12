"use client";

import React from "react";
import { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";


export default function YearGraph() {

  const [data, setData] = useState<DataType>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/group/year");
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData(); // ✅ Call API only once on mount
  }, []); // ✅ Empty dependency array ensures it runs once

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/group/year`,
  //   {
  //     cache: "no-store",
  //   }
  // );

  // if (!res.ok) throw new Error("Failed to fetch submissions");
  type InputData = Record<string, { name: string; total_amount: string }[]>;
  type OutputData = { year: number; [company: string]: number }[];
  
  const refactorData = (data: InputData): OutputData => {
    return Object.entries(data).map(([year, companies]) => {
      const transformedYear: { year: number; [key: string]: number } = { year: parseInt(year) };
  
      companies.forEach(({ name, total_amount }) => {
        transformedYear[name] = parseFloat(total_amount);
      });
  
      return transformedYear;
    });
  };
console.log(data);
  console.log(refactorData(data));

  const transformedData = Object.entries(data).map(([year, records]) => ({
    year,
    data: (records as { total_amount: number }[]).map(
      (record) => record.total_amount
    ),
  }));

  // convert array of strings to array of numbers
  const stringToNum = (arr: number[]) => arr.map(Number);

  const barchartxAxis = transformedData.map(
    (elem: { year: string }) => elem.year
  );
  const barchartyAxis = transformedData.map((elem: { data: number[] }) =>
    stringToNum(elem.data)
  );

  const yAxisObj = barchartyAxis.map((elem: number[]) => {
    return { data: elem };
  });



  const maxY = Math.max(...yAxisObj.flatMap((d) => d.data)) + 5000; // Add padding
  const [chartWidth, setChartWidth] = useState(500);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth < 600 ? 300 : 800); // Adjust width based on screen size
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <BarChart className="mx-auto w-full"
    dataset={refactorData(data)}
      series={yAxisObj}
      height={290}
      width={chartWidth}
      xAxis={[{ dataKey: 'year', scaleType: "band" }]}
      yAxis={[{ min: 0, max: maxY }]}
      margin={{ top: 10, bottom: 30, left: 50, right: 10 }}
    />
  );
}
