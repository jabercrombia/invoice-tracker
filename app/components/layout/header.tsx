import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Link from "next/link";
const items = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Form",
    url: "/form",
  },
  {
    title: "Submission",
    url: "/submission",
  },
];

export default function Header() {
  return (
    <nav>
        <div className="container mx-auto">
            {items.map((item, index) => (
                <Link href={item.url} title={item.title} key={index} tabIndex={index}>
                    <span>{item.title}</span>
                </Link>
            ))}
        </div>
    </nav>
  );
}
