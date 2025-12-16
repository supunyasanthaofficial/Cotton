import D1 from "../assets/images/D1.png";

const Discount = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-20">
      <div className="bg-gray-200 rounded-b-none flex flex-col lg:flex-row items-center overflow-hidden shadow-md">
        <div className="lg:w-1/2 w-full p-0">
          <div className=" rounded-4xl p-0">
            <img
              src={D1}
              alt="Fashion outfit"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full px-8 py-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Get a <span className="text-red-500">$50</span>Discount on your
            first Order!
          </h2>

          <p className="text-black text-xl leading-relaxed mb-8">
            Discover clothing made to make you smile-soft fabrics,comfy fits,and
            stylish pieces for everyone in the family.Cute,cozy,and crafted with
            love.Dress your day in cuteness! Explode everyday essentials,stylish
            outfits,and playful designs perfect for eveery age and every moment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input
              type="email"
              placeholder="Email Addresses"
              className="flex-1 px-4 py-3 rounded-full border-red-500 outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Discount;
