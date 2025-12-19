import WC1 from "../assets/images/WC1.png";
import WC2 from "../assets/images/WC2.png";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-[#efefef] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className=" rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white bg-opacity-50 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-4">
              Sustainability Commitment
            </h2>

            <p className="text-gray-600 mb-8 text-lg md:text-xl leading-relaxed">
              Cute, trendy, and totally you. Our women's wear collection is
              filled with pretty patterns, flattering cuts, and soft fabrics
              that make dressing up feel fun again.
            </p>

            <ProgressItem
              title="Eco-Friendly Materials"
              desc="Dress up in the cutest fits made just for you! Whether you're going out, staying in, or shining all day, our women's collection brings colors, charm, and confidence to every look."
              value={97}
            />

            <ProgressItem
              title="Ethical Manufacturing"
              desc="Dress up in the cutest fits made just for you! Whether you're going out, staying in, or shining all day, our women's collection brings colors, charm, and confidence to every look."
              value={85}
            />

            <ProgressItem
              title="Mindful Packing"
              desc="Dress up in the cutest fits made just for you! Whether you're going out, staying in, or shining all day, our women's collection brings colors, charm, and confidence to every look."
              value={100}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <img
                src={WC1}
                alt="Sale Bag"
                className="w-[470px] h-[444px] object-cover rounded-3xl"
              />
            </div>

            <div className="col-span-2 rounded-2xl overflow-hidden">
              <img
                src={WC2}
                alt="Accessories"
                className="w-[470px] h-[280px] object-cover  rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ProgressItem = ({ title, desc, value }) => (
  <div className="mb-15">
    <h4 className="font-bold mb-1 text-xl">{title}</h4>
    <p className="text-sm text-gray-600 mb-3 max-w-lg">{desc}</p>

    <div className="flex items-center gap-4">
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#8B3A32] rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-sm font-semibold">{value}%</span>
    </div>
  </div>
);
