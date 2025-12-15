import Header from "../components/Header";

import Header1 from "../assets/images/Header1.png";
import Header2 from "../assets/images/Header2.png";
import Header3 from "../assets/images/Header3.png";
import Header4 from "../assets/images/Header4.png";
import Header5 from "../assets/images/Header5.png";

import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
import bag from "../assets/images/bag.png";

import fc1 from "../assets/images/fc1.jpg";
import fc2 from "../assets/images/fc2.png";
import fc3 from "../assets/images/fc3.png";
import fc4 from "../assets/images/fc4.jpg";

const Home = () => {
  const brands = [
    brand1,
    brand2,
    brand1,
    brand2,
    brand1,
    brand2,
    brand1,
    brand2,
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        images={[Header1, Header2, Header3, Header4, Header5]}
        autoSlide={true}
        height="h-[600px] md:h-[800px]"
      />

      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          DON’T MISS OUT
        </h2>

        <p className="text-pink-600 font-semibold mt-1">
          ON THESE PRECIOUS STYLES THAT WE OFFER YOU !
        </p>

        <p className="max-w-3xl mx-auto text-gray-600 mt-4">
          Welcome to our clothing store — your one-stop destination for stylish,
          comfortable, and affordable fashion.
        </p>

        <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
          {brands.map((img, index) => (
            <div
              key={index}
              className="w-28 h-28 rounded-full border-2 border-pink-400 flex items-center justify-center bg-white shadow-sm hover:scale-105 transition"
            >
              <img src={img} alt="brand" className="w-16 object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center mb-10">
          FEATURED COLLECTIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Women */}
          <div className="relative w-210 h-100 right-0 overflow-hidden rounded group">
            <img
              src={fc1}
              alt="Women Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6">
              <h3 className="text-pink-400 text-xl font-semibold">
                Women's Collection
              </h3>
              <p className="text-black font-semibold text-sm mt-2 max-w-xs">
                Discover styles that make you feel beautiful inside and out.From
                flowy dresses to cozy tops,our women's collection is all about
                confidence is all about confidence,comfort,and a little sparkle
                in every outfit.
              </p>
              <button className="mt-4 w-fit px-5 py-2 bg-pink-500 text-white font-bold rounded-full text-sm hover:bg-pink-600 transition">
                Explore Collection
              </button>
            </div>
          </div>

          {/* Sale  */}
          <div className="relative w-100 h-100 left-54 overflow-hidden rounded">
            <img src={fc3} alt="Sale" className="w-full h-full object-cover" />
          </div>

          {/* Shoes */}
          <div className="relative h-120 overflow-hidden rounded">
            <img
              src={fc2}
              alt="Shoes Sale"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Kids */}
          <div className="relative h-120 overflow-hidden rounded group">
            <img
              src={fc4}
              alt="Kids Corner"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6">
              <h3 className="text-blue-400 text-xl font-semibold">
                Kid's Corner
              </h3>
              <p className="text-black font-semibold text-sm mt-2 max-w-xs">
                Tiny outfits for big smiles! Our kid's collection is filled with
                soft fabrics,bright colors, and adorable styles made for every
                little adventure.
              </p>
              <button className="mt-4 w-fit px-5 py-2 bg-blue-500 text-white font-bold rounded-full text-sm hover:bg-blue-600 transition">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Deal of the Day */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden">
          {/* LEFT SIDE */}
          <div className="bg-[#f36f6f] p-10 flex flex-col justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
              Deal Of The Day
            </h2>

            <div className="bg-white rounded-2xl p-6 relative max-w-md">
              {/* SALE LABEL */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                <span className="absolute top-5 -right-12 w-40 text-center bg-red-700 text-white text-xs font-bold py-1 rotate-45 border border-white shadow-sm">
                  SALE
                </span>
              </div>

              <h3 className="font-bold text-lg mb-2">Ladies Bags</h3>

              <p className="mb-3">
                <span className="line-through text-gray-400 mr-2">$250.00</span>
                <span className="font-bold text-black">$150.00</span>
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                Complete your look with the cutest little details! From sparkly
                earrings to trendy bags, our accessories add the perfect touch
                of charm to every outfit.
              </p>

              <button className="mt-4 px-6 py-2 bg-red-700 text-white rounded-full text-sm font-semibold hover:bg-red-800 transition">
                Shop Now
              </button>

              {/* TIMER */}
              <div className="flex gap-5 mt-6">
                <div className="text-center">
                  <div className="bg-[#f36f6f] text-white font-bold text-xl rounded-xl px-4 py-2">
                    10
                  </div>
                  <p className="text-xs mt-1">DAYS</p>
                </div>

                <div className="text-center">
                  <div className="bg-[#f36f6f] text-white font-bold text-xl rounded-xl px-4 py-2">
                    02
                  </div>
                  <p className="text-xs mt-1">HOUR</p>
                </div>

                <div className="text-center">
                  <div className="bg-[#f36f6f] text-white font-bold text-xl rounded-xl px-4 py-2">
                    45
                  </div>
                  <p className="text-xs mt-1">MINUTES</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#b30018] p-10 flex flex-col border justify-center text-white">
            <img
              src={bag}
              alt="Women Handbag"
              className="max-w-3xs md:max-w-1xl self-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
