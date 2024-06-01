import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-2">
      <p>Home page [public].</p>
      <p>
        Go <Link className="text-blue-600 hover:underline" href="/private">private</Link>.
      </p>
    </div>
  );
}
