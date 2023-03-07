import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-end space-x-8 my-4">
      <Link href="/" className="hover:text-zinc-100">
        Home
      </Link>
      <Link href="/projects" className="hover:text-zinc-100">
        Projects
      </Link>
      <Link href="/about" className="hover:text-zinc-100">
        About
      </Link>
    </nav>
  );
}
