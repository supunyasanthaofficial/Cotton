import Header from "../components/Header";

import B1 from "../assets/images/B1.jpg";
import B2 from "../assets/images/B2.png";
import B3 from "../assets/images/B3.png";
import B4 from "../assets/images/B4.png";
import B5 from "../assets/images/B5.png";
import B6 from "../assets/images/B6.jpg";

import Header6 from "../assets/images/Header6.png";
import NewArrivalsSection from "../components/NewArrivalsSection";

export default function NewArrivals() {
  return (
    <div>
      <Header
        images={[Header6]}
        autoSlide={false}
        height="h-[600px] md:h-[800px]"
        showContent
        buttonText="Shop Now"
        buttonClass="bg-[#E74F7E] text-white hover:bg-gray-800 mt-140 w-50 "
        onButtonClick={() => console.log("Shop Now Clicked")}
        align="left"
        contentOffset="ml-5 md:ml-40"
      />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Beast For Your Category
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dress your day in cuteness! Explore everyday essentials, stylish
              outfits, and playful designs perfect for every age and every
              moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Women's Clothing */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-96">
              <img
                src={B1}
                alt="Women's Clothing"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl md:text-2xl font-bold text-[#E74F7E] drop-shadow-2xl">
                  WOMEN'S CLOTHING
                </h3>
              </div>
            </div>

            {/* Men's Clothing */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-96">
              <img
                src={B2}
                alt="Men's Clothing"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl md:text-2xl font-bold text-[#2F890B] drop-shadow-2xl">
                  MEN'S CLOTHINGS
                </h3>
              </div>
            </div>

            {/* Kids Clothing */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-96">
              <img
                src={B6}
                alt="Kids Clothing"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl md:text-2xl font-bold text-[#2109DD] drop-shadow-2xl">
                  KIDS CLOTHING
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shoes */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
              <img
                src={B3}
                alt="Shoes Collection"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl md:text-2xl font-bold text-white drop-shadow-2xl">
                  SHOES COLLECTION
                </h3>
              </div>
            </div>

            {/* Jewellery */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
              <img
                src={B4}
                alt="Jewellery Collection"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl md:text-2xl font-bold text-white drop-shadow-2xl">
                  JEWELLERY COLLECTION
                </h3>
              </div>
            </div>

            {/* Hand Bags */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
              <img
                src={B5}
                alt="Hand Bags Collection"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl md:text-2xl font-bold text-[#8228D1] drop-shadow-2xl">
                  HAND BAGS COLLECTION
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <NewArrivalsSection />
        </div>
      </section>
    </div>
  );
}
