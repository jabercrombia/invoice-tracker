import AmountTotal from "./components/dashboard/amount-total";

import AmountUnpaid from "./components/dashboard/amount-unpaid";
import CompanyList from "./components/dashboard/company-list";


export default function Home() {
  return (
    <div className="container mx-auto">
      <h1>Invoice Dashboard</h1>
      <p>Overview of your invoice activity.</p>
      <div className="grid grid-cols-2 gap-4">
        <AmountTotal />
        <AmountUnpaid />
      </div>

      <h1>Client Payments</h1>
      <CompanyList />
    </div>


 
  );
}
