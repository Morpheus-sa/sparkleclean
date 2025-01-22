"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Booking() {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    address: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setBookingData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to a server
    console.log("Booking submitted:", bookingData);
    // Reset form after submission
    setBookingData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      address: "",
      notes: "",
    });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
        Book a Cleaning
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
              value={bookingData.name}
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
              value={bookingData.email}
              onChange={handleChange}
              required
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-blue-900"
            >
              Phone
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={bookingData.phone}
              onChange={handleChange}
              required
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-blue-900"
            >
              Date
            </label>
            <Input
              type="date"
              id="date"
              name="date"
              value={bookingData.date}
              onChange={handleChange}
              required
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block mb-2 text-sm font-medium text-blue-900"
            >
              Time
            </label>
            <Input
              type="time"
              id="time"
              name="time"
              value={bookingData.time}
              onChange={handleChange}
              required
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="block mb-2 text-sm font-medium text-blue-900"
            >
              Service
            </label>
            <Select
              name="service"
              value={bookingData.service}
              onValueChange={(value) =>
                setBookingData((prev) => ({ ...prev, service: value }))
              }
            >
              <SelectTrigger className="border-blue-300 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">
                  Residential Cleaning
                </SelectItem>
                <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                <SelectItem value="deep">Deep Cleaning</SelectItem>
                <SelectItem value="move">Move In/Out Cleaning</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-blue-900"
            >
              Address
            </label>
            <Textarea
              id="address"
              name="address"
              rows={3}
              value={bookingData.address}
              onChange={handleChange}
              required
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="notes"
              className="block mb-2 text-sm font-medium text-blue-900"
            >
              Additional Notes
            </label>
            <Textarea
              id="notes"
              name="notes"
              rows={4}
              value={bookingData.notes}
              onChange={handleChange}
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Book Cleaning
          </Button>
        </form>
      </div>
    </div>
  );
}
