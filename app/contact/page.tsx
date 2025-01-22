"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
        Contact Us
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-blue-900"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-blue-900"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-blue-900"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Send Message
          </Button>
        </form>
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
          Our Location
        </h2>
        <div className="">
          <Image
            src="/images/mapp.png"
            alt="SparkleClean Team"
            className="bg-gray-200 h-64 rounded-lg flex items-center justify-center"
          />
        </div>
        <div className="mt-6 text-center text-blue-900">
          <p>123 Cleaning Street, Johannesburg</p>
          <p>Phone: (+27) 68-456-7890</p>
          <p>Email: info@sparkleclean.com</p>
        </div>
      </div>
    </div>
  );
}
