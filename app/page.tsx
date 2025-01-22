import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="bg-cover bg-center h-[50vh] flex items-center justify-center relative">
        <Image
          src="/images/cleaning-background.png"
          alt="Cleaning Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="text-center text-white bg-blue-600 bg-opacity-75 p-8 rounded-lg relative z-10">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to SparkleClean Services
          </h1>
          <p className="text-xl mb-8">
            Professional cleaning for your home and office
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/booking">Book a Cleaning</Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/images/residential-cleaning.jpg"
              alt="Residential Cleaning"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-full"
            />
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">
              Residential Cleaning
            </h2>
            <p>
              Keep your home spotless with our professional cleaning services.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/images/commercial-cleaning.png"
              alt="Commercial Cleaning"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-full"
            />
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">
              Commercial Cleaning
            </h2>
            <p>
              Maintain a clean and professional environment for your business.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/images/special-services.png"
              alt="Special Services"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-full"
            />
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">
              Special Services
            </h2>
            <p>
              From deep cleaning to move-in/move-out services, we've got you
              covered.
            </p>
          </div>
        </section>

        <section className="text-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            Why Choose SparkleClean?
          </h2>
          <ul className="list-disc list-inside text-left max-w-2xl mx-auto">
            <li>Experienced and professional staff</li>
            <li>Eco-friendly cleaning products</li>
            <li>Flexible scheduling options</li>
            <li>100% satisfaction guarantee</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
