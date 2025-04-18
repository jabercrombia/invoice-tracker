"use client";

import React from "react";
import { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";


export default function YearGraph() {

  type DataType = Record<string, { name: string; total_amount: string }[]>;
  const [data, setData] = useState<DataType>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/group/year");
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData(); 
  }, []); 

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

  

  const transformedData = Object.entries(data).map(([year, records]) => ({
    year,
    data: records.map(
      (record) => parseFloat(record.total_amount)
    ),
  }));

  // convert array of strings to array of numbers
  const stringToNum = (arr: number[]) => arr.map(Number);

  const barchartyAxis = transformedData.map((elem: { data: number[] }) =>
    stringToNum(elem.data)
  );

  const yAxisObj = barchartyAxis.map((elem: number[]) => {
    return { data: elem };
  });



  const maxY = Math.max(...yAxisObj.flatMap((d) => d.data)) + 5000; // Add padding
  const [chartWidth, setChartWidth] = useState(500);
  const [chartHeight, setChartHeight] = useState(500);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth < 768 ? 400 : 650); // Adjust width based on screen size
      setChartHeight(window.innerWidth < 768 ? 300 : 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="border-1 border-gray-200 p-4 mt-[50px]">
      <h2 className="text-center">Yearly Payments</h2>
      <BarChart className="mx-auto w-full"
        dataset={refactorData(data)}
        series={yAxisObj}
        width={chartWidth}
        height={chartHeight}
        xAxis={[{ dataKey: 'year', scaleType: "band" }]}
        yAxis={[{ min: 0, max: maxY }]}
        margin={{ top: 10, bottom: 30, left: 50, right: 10 }}
      />
    </div>

  );
}
