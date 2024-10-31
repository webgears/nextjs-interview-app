import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function ShopsLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="container mx-auto p-8 text-black">
        <div className="flex justify-between items-center">
          <nav>
            <Link href="/" className="hover:underline mr-2">
              Home
            </Link>
            <Link href="/shops" className="hover:underline mx-2">
              Shops
            </Link>
            <Link href="/about" className="hover:underline mx-2">
              About
            </Link>
            <Link href="/contact" className="hover:underline mx-2">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto p-8 flex-grow">{children}</main>
    </div>
  );
}
