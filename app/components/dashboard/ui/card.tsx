
import { formatCurrency } from "@/utils/formatcurrency";

interface CardProps {
    title: string;
    data: number;
}

export default function Card({ title, data }: CardProps) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{formatCurrency(data)}</p>
        </div>
    )
}