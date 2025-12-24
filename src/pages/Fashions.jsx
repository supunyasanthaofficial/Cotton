import FashionProductSection from "../components/FashionProductSection";
import BestSalesSection from "../components/BestSalesSection";
import Snowfall from "react-snowfall"; 

export default function Fashions() {
  return (
    <>
      <Snowfall
        color="#82c3d9"
        snowflakeCount={120}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
          pointerEvents: "none",
        }}
      />

      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Fashion Club
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed mb-10">
            Sign up for exclusive offers, new arrivals and style inspiration.
            Cute fashion starts here — bright colours, soft materials, and
            feel-good styles made for women,men,and little ones.Simple,sweet,and
            always stylish.
          </p>

          {/* Email + Button */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-[420px] px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
            />

            <button className="bg-red-700 hover:bg-red-800 text-white px-10 py-3 rounded-full font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <FashionProductSection />
        </div>
      </section>
      <section>
        <div>
          <BestSalesSection />
        </div>
      </section>
    </>
  );
}
