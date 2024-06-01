import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-2">
      <p>Private page [auth only].</p>
      <p>
        Go{" "}
        <Link className="text-blue-600 hover:underline" href="/">
          public
        </Link>
        .
      </p>
    </div>
  );
}
