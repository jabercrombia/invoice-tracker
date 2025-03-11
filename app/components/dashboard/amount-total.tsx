import Card from "./ui/card";

export default async function AmountTotal() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-submissions`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch submissions");

  const submissions = await res.json();

  const data = submissions.data;

  // filter
  const amountFilter = data?.filter((str: { amount: string; status : string }) => {
    return str?.amount !== null && str?.status == 'approved';
  });

  // change string to num
  const amountNum = amountFilter?.map((str: { amount: string }) => str?.amount ? parseFloat(str?.amount): null);

  // add all values in array
  const sum: number = amountNum.reduce((a : number, b : number) => {  
      const totalAmount = a + b;
      return parseFloat(totalAmount.toFixed(2));  
  }, 0); 



  return (
    <div>
      {sum && <Card title="Total Amount Paid" data={sum}/> }
    </div>
  );
}
