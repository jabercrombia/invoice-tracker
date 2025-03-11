export default async function SubmissionsList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-submissions`, {
    cache: "no-store", // Ensures fresh data
  });

  if (!res.ok) throw new Error("Failed to fetch submissions");

  const submissions = await res.json();

  const data = submissions.data;

  // filter
  const amountFilter = data?.filter((str: { amount: string }) => {
    return str?.amount !== null;
  });

  // change string to num
  const amountNum = amountFilter?.map((str: { amount: string }) => str?.amount ? parseFloat(str?.amount): null);

  // add all values in array
  const sum = amountNum.reduce((accumulator : number, currentValue : number) => accumulator + currentValue, 0);

  return (
    <div>
      <h2>Amount</h2>
      {sum && <p>{sum}</p>}
    </div>
  );
}
