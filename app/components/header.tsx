
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            SparkleClean
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 items-center">
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block hover:text-blue-200">
              Home
            </Link>
            <Link href="/services" className="block hover:text-blue-200">
              Services
            </Link>
            <Link href="/about" className="block hover:text-blue-200">
              About Us
            </Link>
            <Link href="/contact" className="block hover:text-blue-200">
              Contact
            </Link>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}

