import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="flex justify-center text-4xl mb-4">
        Welcome to Stefin Racho's Portfolio Website!
      </h1>
      <p className="flex justify-center mb-4">(in development...) 🏗️</p>
      <p className="flex justify-center text-xl mb-4">
        Come back often to see what I will add!
      </p>
      <Link href="https://github.com/stefin0" className="flex justify-center">
        <Image src="/github.svg" width="32" height="30" alt="github" />
      </Link>
    </main>
  );
}
