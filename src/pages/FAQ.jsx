import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Most orders are delivered within 3–5 business days, depending on your location and courier availability.",
  },
  {
    question: "Do you offer returns or exchanges?",
    answer:
      "Yes. You can request a return or exchange within 7 days of receiving your order if the item is unused and in its original condition.",
  },
  {
    question: "Can I order custom sizes or colors?",
    answer:
      "Absolutely. Feel free to contact us through the contact page and we’ll be happy to help with custom requests.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we mainly serve local and selected international deliveries. Please contact us for specific shipping availability.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a confirmation message with tracking details.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-[#fffaf7] text-black">
      <section className="bg-linear-to-r from-[#ffe7db] to-[#fff4eb] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm mb-4">
            <FaQuestionCircle className="text-[#a70011]" />
            <span className="font-semibold">Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to know
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Find quick answers about shipping, returns, sizing, and ordering.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-[#f1d5c8] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold text-lg">{item.question}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180 text-[#a70011]" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-[#fff0e8] p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Still need help?</h3>
          <p className="text-gray-700 mb-6">
            Our team is ready to assist you with product questions and orders.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#a70011] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#8a000e] transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
