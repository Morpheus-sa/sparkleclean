import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
        About SparkleClean
      </h1>

      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <Image
            src="/images/clean.png"
            alt="SparkleClean Team"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Our Story
          </h2>
          <p className="mb-4 text-blue-900">
            Founded in 2025, SparkleClean has been providing top-notch cleaning
            services to homes and businesses in the area. Our commitment to
            quality and customer satisfaction has made us a trusted name in the
            cleaning industry.
          </p>
          <p className="text-blue-900">
            We believe that a clean environment is essential for a healthy and
            productive life. That's why we strive to deliver exceptional
            cleaning services that not only meet but exceed our clients'
            expectations.
          </p>
        </div>
      </div>

      <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">
              Quality
            </h3>
            <p className="text-blue-900">
              We are committed to delivering the highest quality cleaning
              services, paying attention to every detail.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">
              Reliability
            </h3>
            <p className="text-blue-900">
              Our clients can always count on us to show up on time and complete
              the job as promised.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">
              Eco-Friendly
            </h3>
            <p className="text-blue-900">
              We use environmentally friendly cleaning products and methods to
              protect your health and the planet.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
          Our Team
        </h2>
        <p className="text-center mb-8 text-blue-900">
          Our team of experienced and dedicated cleaning professionals is the
          heart of our company. Each member is thoroughly trained and committed
          to providing the best possible service to our clients.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <Image
                src="/images/one.png"
                alt="Team Member"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-blue-600">Team Member {i}</h3>
              <p className="text-sm text-blue-900">Position</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
