"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "@mynaui/icons-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md z-50 relative">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            SparkleClean
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex space-x-4 md:space-x-4 md:items-center md:static absolute top-full left-0 w-full bg-blue-600 md:bg-transparent md:w-auto shadow-lg md:shadow-none`}
          >
            <Link href="/" className="block py-2 px-4 hover:bg-blue-700">
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2 px-4 hover:bg-blue-700"
            >
              Services
            </Link>
            <Link href="/about" className="block py-2 px-4 hover:bg-blue-700">
              About Us
            </Link>
            <Link href="/contact" className="block py-2 px-4 hover:bg-blue-700">
              Contact
            </Link>
            <div className="block py-2 px-4">
              <Button asChild variant="secondary">
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
