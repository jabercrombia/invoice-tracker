import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

  import { formatCurrency } from "@/utils/formatcurrency";

export default async function CompanyList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/groupname`, {
        cache: "no-store",
      });
    
      if (!res.ok) throw new Error("Failed to fetch submissions");
    
      const submissions = await res.json();
      const data = submissions.data;

    return (
        <Table>
            <TableCaption>Total Payments by Client</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Company Name</TableHead>
                <TableHead>Invoices</TableHead>
                <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((elem: {id: number; name: string; total_amount : number; total_submissions : number}, index : number) => (
                    <TableRow key={index}>
                        <TableCell>{elem.name}</TableCell>
                        <TableCell>{elem.total_submissions}</TableCell>
                        <TableCell>{formatCurrency(elem.total_amount)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>        
        </Table>
    )
}