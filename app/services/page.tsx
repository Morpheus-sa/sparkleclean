import Image from "next/image";

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/residential-cleaning.jpg"
            alt="Residential Cleaning"
            width={400}
            height={200}
            className="w-full mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">
            Residential Cleaning
          </h2>
          <ul className="list-disc list-inside text-blue-900">
            <li>Regular house cleaning</li>
            <li>Deep cleaning</li>
            <li>Move-in/move-out cleaning</li>
            <li>Spring cleaning</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/commercial-cleaning.png"
            alt="Commercial Cleaning"
            width={400}
            height={200}
            className="w-full mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">
            Commercial Cleaning
          </h2>
          <ul className="list-disc list-inside text-blue-900">
            <li>Office cleaning</li>
            <li>Retail store cleaning</li>
            <li>Restaurant cleaning</li>
            <li>Industrial cleaning</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/special-services.png"
            alt="Specialized Services"
            width={400}
            height={200}
            className="w-full mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">
            Specialized Services
          </h2>
          <ul className="list-disc list-inside text-blue-900">
            <li>Carpet cleaning</li>
            <li>Window washing</li>
            <li>Upholstery cleaning</li>
            <li>Post-construction cleaning</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/green-cleaning.png"
            alt="Green Cleaning"
            width={400}
            height={200}
            className="w-full mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">
            Green Cleaning
          </h2>
          <ul className="list-disc list-inside text-blue-900">
            <li>Eco-friendly products</li>
            <li>Sustainable cleaning methods</li>
            <li>Allergen reduction</li>
            <li>Indoor air quality improvement</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
