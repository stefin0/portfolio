import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-end space-x-4">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
