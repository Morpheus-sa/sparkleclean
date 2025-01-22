import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2025 SparkleClean Services. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="/privacy" className="hover:text-blue-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
