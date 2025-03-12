import Link from "next/link";
const items = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Invoices",
    url: "/submission",
  },
];

export default function Header() {
  return (
    <nav>
        <div className="container mx-auto px-4">
            {items.map((item, index) => (
                <Link href={item.url} title={item.title} key={index} tabIndex={index}>
                    <span>{item.title}</span>
                </Link>
            ))}
        </div>
    </nav>
  );
}
