import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Stefin's Portfolio",
  description: "Stefin Racho's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-400 mx-8">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
