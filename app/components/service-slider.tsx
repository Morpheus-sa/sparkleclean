"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    src: "/images/residential-cleaning.jpg",
    alt: "Residential Cleaning",
    title: "Residential Cleaning",
    description:
      "Keep your home spotless with our professional cleaning services.",
    price: "R400 - R2 000",
  },
  {
    src: "/images/commercial-cleaning.png",
    alt: "Commercial Cleaning",
    title: "Commercial Cleaning",
    description:
      "Maintain a clean and professional environment for your business.",
    price: "R15 000 - R30 000",
  },
  {
    src: "/images/special-services.png",
    alt: "Special Services",
    title: "Special Services",
    description:
      "From deep cleaning to move-in/move-out services, we've got you covered.",
    price: "R5 000 - R1 000",
  },
  {
    src: "/images/green-cleaning.png",
    alt: "Deep Cleaning",
    title: "Deep Cleaning",
    description: "Thorough cleaning of every nook and cranny of your space.",
    price: "R3 000 - R4 500",
  },
];

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= services.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = services.length - 1;
      return nextIndex;
    });
  };

  return (
    <div className="relative overflow-hidden py-12 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center h-[500px] relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 z-10 bg-white/80 hover:bg-white"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-md"
            >
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={services[currentIndex].src || "/placeholder.svg"}
                    alt={services[currentIndex].alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = `/placeholder.svg?height=200&width=200&text=${services[currentIndex].title}`;
                    }}
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-blue-700">
                  {services[currentIndex].title}
                </h2>
                <p className="mb-2">{services[currentIndex].description}</p>
                <p className="font-semibold text-blue-600">
                  {services[currentIndex].price}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 z-10 bg-white/80 hover:bg-white"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-blue-200"
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}