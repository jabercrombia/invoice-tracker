import AmountTotal from "./components/dashboard/amount-total";

import AmountUnpaid from "./components/dashboard/amount-unpaid";
import CompanyList from "./components/dashboard/company-list";

import YearGraph from "./components/dashboard/yeargraph";


export default function Home() {
  return (
    <div className="container mx-auto">
      <h1>Invoice Dashboard</h1>
      <p>Overview of your invoice activity.</p>
      <div className="grid grid-cols-2 gap-4">
        <AmountTotal />
        <AmountUnpaid />
      </div>

      <h2>Client Payments</h2>
      <CompanyList />
      <YearGraph />
    </div>


 
  );
}
