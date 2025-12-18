import React from "react";
import BS1 from "../assets/images/BS1.png";

export default function BestSalesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-16 h-1 bg-red-700 rounded-full"></span>
          <h4 className="text-red-700 font-semibold tracking-wide">
            Best Sales
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src={BS1}
              alt="Fashion Models"
              className="w-full max-w-157.5[630px] rounded-lg object-cover"
            />

            <span className="absolute bottom-6 right-6 text-gray-300 text-2xl">
              ✦
            </span>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Because Your Style Deserves <br /> the Best
            </h2>

            <p className="text-gray-600 mb-8 max-w-lg">
              Cute meets simple — with clean lines, soft tones, and everyday
              pieces that elevate your natural glow. Find the perfect look for
              every moment.
            </p>

            <div className="space-y-6">
              <Feature
                title="Vision Clarity"
                text="Cute meets simple — with clean lines, soft tones, and everyday pieces that elevate your natural glow."
              />
              <Feature
                title="Fashion and Style"
                text="Cute meets simple — with clean lines, soft tones, and everyday pieces that elevate your natural glow."
              />
              <Feature
                title="Quality and Durability"
                text="Cute meets simple — with clean lines, soft tones, and everyday pieces that elevate your natural glow."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Feature = ({ title, text }) => (
  <div className="flex items-start gap-4">
    <span className="text-black text-xl mt-1">✔</span>
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed max-w-xl">{text}</p>
    </div>
  </div>
);
