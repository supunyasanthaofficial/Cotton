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
import TrendingProducts from "../components/TrendingProducts";
import Discount from "../components/Discount";

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

  const reviews = [
    {
      name: "Nethmi Perera",
      rating: 5,
      review:
        "Absolitely love the quality! I ordered a dress and a top, and they both fell super soft and comfortable. The fit was perfect too! Will definitly shop again.",
    },
    {
      name: "Shenaya Fernando",
      rating: 5,
      review:
        "Fast delivery & beautiful packages.My order arrived earlier than expected and packed so nicely. The clothes look even better in real life.Highly recommended.",
    },
    {
      name: "Dilani Jayasekara",
      rating: 5,
      review:
        "The Kid's collection is adorable! i bought a few outfits for my daughter everything is so cute and the fabric is gentie on her skin.She loves them!",
    },
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
      <section className="max-w-full mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl min-h-150 md:min-h-175">
          <div className="bg-[#f36f6f] p-8 md:p-12 lg:p-16 flex items-center">
            <div className="w-full max-w-xl mx-auto">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 md:mb-10">
                Deal Of The Day
              </h2>

              <div className="bg-white rounded-2xl p-8 relative shadow-lg">
                {/* SALE LABEL */}
                <div className="absolute -top-2 -right-2 w-24 h-24 overflow-hidden pointer-events-none">
                  <span className="absolute top-5 -right-12 w-40 text-center bg-red-700 text-white text-sm font-bold py-1.5 rotate-45 border border-white shadow-lg">
                    SALE
                  </span>
                </div>

                <h3 className="font-bold text-2xl mb-3 text-gray-900">
                  Ladies Bags
                </h3>

                <p className="mb-4 text-lg">
                  <span className="line-through text-gray-500 mr-3 text-xl">
                    $250.00
                  </span>
                  <span className="font-bold text-2xl text-red-600">
                    $150.00
                  </span>
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Complete your look with the cutest little details! From
                  sparkly earrings to trendy bags, our accessories add the
                  perfect touch of charm to every outfit.
                </p>

                <button className="mt-4 px-8 py-3 bg-red-600 text-white rounded-full text-base font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Shop Now
                </button>

                <div className="flex gap-4 md:gap-6 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center flex-1">
                    <div className="bg-[#f36f6f] text-white font-bold text-2xl md:text-3xl rounded-lg px-4 py-3 shadow-md">
                      10
                    </div>
                    <p className="text-xs md:text-sm mt-2 text-gray-700 font-medium">
                      DAYS
                    </p>
                  </div>

                  <div className="text-center flex-1">
                    <div className="bg-[#f36f6f] text-white font-bold text-2xl md:text-3xl rounded-lg px-4 py-3 shadow-md">
                      02
                    </div>
                    <p className="text-xs md:text-sm mt-2 text-gray-700 font-medium">
                      HOURS
                    </p>
                  </div>

                  <div className="text-center flex-1">
                    <div className="bg-[#f36f6f] text-white font-bold text-2xl md:text-3xl rounded-lg px-4 py-3 shadow-md">
                      45
                    </div>
                    <p className="text-xs md:text-sm mt-2 text-gray-700 font-medium">
                      MINUTES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE WITH TRANSPARENT BACKGROUND */}
          <div className="bg-linear-to-br from-red-50 to-pink-50 p-8 md:p-12 lg:p-16 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <img
                  src={bag}
                  alt="Women Handbag"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <TrendingProducts />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-center text-4xl font-bold mb-16">
          Cutomer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {reviews.map((item, index) => (
            <div key={index} className="text-center px-6 relative">
              <h3 className="font-semibold text-sm mb-4">{item.name}</h3>

              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                </svg>
              </div>

              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < item.rating ? "text-orange-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div>
          <Discount />
        </div>
      </section>
    </div>
  );
};

export default Home;
