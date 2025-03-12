import AmountTotal from "./components/dashboard/amount-total";

import AmountUnpaid from "./components/dashboard/amount-unpaid";
import CompanyList from "./components/dashboard/company-list";

import YearGraph from "./components/dashboard/yeargraph";


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1>Invoice Dashboard</h1>
      <p>Overview of your invoice activity.</p>
      <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-4">
        <AmountTotal />
        <AmountUnpaid />
      </div>

      <h2 className="mt-[10px]">Client Payments</h2>
      <CompanyList />
      <YearGraph />
    </div>


 
  );
}
