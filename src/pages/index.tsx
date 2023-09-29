import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/about">
        <button className="text-3xl">Go to about</button>
      </Link>
    </main>
  );
}
