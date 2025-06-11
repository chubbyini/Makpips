import { useState } from "react";

const testimonials = [
  {
    name: "Grace A.",
    role: "PhD Researcher – UNILAG, Lagos",
    quote:
      "The project I got was exceptional—well-researched and professionally documented. I couldn’t ask for more.",
  },
  {
    name: "Michael T.",
    role: "Master’s Student – ABU Zaria",
    quote:
      "They translated my ideas into a brilliant final report. Fast delivery and clear communication!",
  },
  {
    name: "Sandra E.",
    role: "Bachelor’s Student – FUTA, Akure",
    quote:
      "This was a life-saver! The final year project was clean, on point, and accepted without revision.",
  },
  {
    name: "Chukwudi N.",
    role: "Precious Stones Client – Lekki, Lagos",
    quote:
      "Engineer Maks sourced and delivered top-grade sapphires with professional precision. I’ll recommend him anywhere.",
  },
  {
    name: "Aisha M.",
    role: "Gold Client – Garki, Abuja",
    quote:
      "Their transparency and handling of my gold investment order gave me peace of mind. Quality service!",
  },
  {
    name: "Ifeanyi J.",
    role: "PhD Student – UNN, Nsukka",
    quote:
      "My aerospace project was better than I imagined. Professional service and real academic depth.",
  },
  {
    name: "Fatima Z.",
    role: "Bachelor’s Student – BUK, Kano",
    quote:
      "I was nervous about my final year project, but they handled it with so much care. Thank you!",
  },
  {
    name: "Osibajo .I",
    role: "Forex Client – Makpips Academy",
    quote:
      "The Makpips Academy made me crazy profitable. I recommend joining his academy for the quickest route to profitability.",
  },
  {
    name: "Anonymous",
    role: "Forex Trader – Abuja",
    quote:
      "Learning from Makpips flipped my trading game. Real mentorship, real results.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prevTestimonial = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextTestimonial = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const { name, role, quote } = testimonials[index];

  return (
    <div className="max-w-4xl mx-auto text-center bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        What Our Clients Say
      </h2>
      <div className="flex flex-col items-center space-y-4">
        <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 max-w-xl">
          “{quote}”
        </blockquote>
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-100">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-white hover:bg-indigo-200 transition"
            aria-label="Previous"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-white hover:bg-indigo-200 transition"
            aria-label="Next"
          >
            <i className="bi bi-chevron-right text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
