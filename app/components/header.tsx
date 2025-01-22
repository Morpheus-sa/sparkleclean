import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            SparkleClean
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-blue-200">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-200">
              Services
            </Link>
            <Link href="/about" className="hover:text-blue-200">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-blue-200">
              Contact
            </Link>
            <Button asChild variant="secondary">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
