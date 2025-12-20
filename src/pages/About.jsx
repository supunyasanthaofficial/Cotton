import Header from "../components/Header";
import Header5 from "../assets/images/Header5.png";
import AboutSection from "../components/AboutSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import OurServicesSection from "../components/OurServicesSection";

import JS1 from "../assets/images/JS1.png";
import JS2 from "../assets/images/JS2.png";

export default function About() {
  return (
    <div className="relative">
      <Header
        images={[Header5]}
        autoSlide={false}
        height="h-[600px] md:h-[800px]"
      />
      <section>
        <div>
          <AboutSection />
        </div>
      </section>
      <section>
        <div>
          <WhyChooseUsSection />
        </div>
      </section>
      <section>
        <div>
          <OurServicesSection />
        </div>
      </section>
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={JS1}
                alt="Kids Fashion"
                className="w-full h-full object-cover"
              />
              <div className="absolute insert-0 bg-pink-300/70 flex-col justify-end p-6">
                <span className="text-xs bg-yellow-400 text-black px-3 py-1 rounded-full w-fit mb-2">
                  NEW ARRIVAL
                </span>
                <h3 className="text-white text-2xl font-bold leading-tight">
                  KIDS <br /> FASHION
                </h3>
              </div>
            </div>

            <div className="bg-pink-100 rounded-2xl p-10 flex-col justify-center text-center">
              <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>

              <p className="text-gray-700 text-xl leading-relaxed mb-15">
                Discover styles that make you feel beautiful inside and out.From
                flowy dresses to cozy tops, our women's collection is all about
                confidence,comfort,and a little sparkle in every outfit.
              </p>

              <button className="mx-auto bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition">
                Contact Us
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={JS2}
                alt="NEW arrival"
                className="w-full h-full object-cover"
              />

              <div className="absolute insert-0 flex flex-col justify-between p-6">
                <div>
                  <span className="bg-white text-black text-sm px-3 py-1 rounded">
                    New
                  </span>
                  <span className="ml-2 bg-yellow-400 text-black text-sm px-3 py-1 rounded">
                    Arrivals
                  </span>
                </div>

                <div className="self-end bg-white px-5 py-2 rounded-full shadow font-medium cursor-pointer">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
