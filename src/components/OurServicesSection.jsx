import TP3 from "../assets/images/TP3.png";
import TP4 from "../assets/images/TP4.png";
import TP5 from "../assets/images/TP5.png";
import TP6 from "../assets/images/TP6.png";

import OS1 from "../assets/images/OS1.png";

export default function OurServicesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-0.75[3px] bg-[#8B3A32] rounded-full" />
          <span className="w-16 h-1 bg-[#8b3a32] rounded-full" />
            <p className="text-sm font-semibold text-[#8B3A32]">Our Services</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            We Provide Best Service <br /> For You
          </h2>

          <p className="text-gray-600 max-w-md mb-8">
            Your one-stop fashion destination for men, women, and kids. Discover
            the latest trends, premium fabrics, and everyday essentials designed
            for style, comfort, and confidence.
          </p>

          <div className="grid grid-cols-4 gap-4 mb-8 max-w-md">
            <div className="h-20 rounded-lg overflow-hidden bg-gray-200">
              <img
                src={TP3}
                alt="Category 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-20 rounded-lg overflow-hidden bg-gray-200">
              <img
                src={TP4}
                alt="Category 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-20 rounded-lg overflow-hidden bg-gray-200">
              <img
                src={TP5}
                alt="Category 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-20 rounded-lg overflow-hidden bg-gray-200">
              <img
                src={TP6}
                alt="Category 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <button className="bg-[#8B3A32] hover:bg-[#732f28] text-white px-8 py-3 rounded-full font-medium transition">
            All Category
          </button>
        </div>

        <div className="relative flex justify-center">
          <div className=" rounded-2xl p-6 w-full max-w-md">
            <img
              src={OS1}
              alt="Our Services"
              className="w-full object-contain"
            />
          </div>

          <span className="absolute bottom-6 right-6 w-4 h-4 bg-white rounded-full opacity-70" />
        </div>
      </div>
    </section>
  );
}
