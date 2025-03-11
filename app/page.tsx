import AmountTotal from "./components/dashboard/amount-total";


export default function Home() {
  return (
    <div className="container mx-auto">
      <h1>Invoice Dashboard</h1>
      <p>Overview of your invoice activity.</p>
      <AmountTotal />
    </div>


 
  );
}
