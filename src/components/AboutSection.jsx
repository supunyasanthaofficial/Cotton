import AS1 from "../assets/images/AS1.png";
import AS2 from "../assets/images/AS2.png";
import BD3 from "../assets/images/BD3.png";

export default function AboutSection() {
  return (
    <section className="w-full  bg-white py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-16 h-1 bg-[#8b3a32] rounded-full" />
              <span className="text-[#8b3a32] font-medium">
                About Cotton Clouds
              </span>
            </div>

            <h2 className="text-4xl font-bold">
              We Have 5 Years Of Experience <br />
              In Fashion Industry.
            </h2>
            <p className="text-gray-600 max-w-xl mb-10">
              Dress your day in cuteness! Explore everyday essentials, stylish
              outfits,and playful designs perfect for every age every moment.
            </p>
            <div className="relative">
              <img
                src={AS1}
                alt="Family Fashion"
                className="w-full rounded-2xl object-cover"
              />
           
            </div>
          </div>
          <div className="space-y-10">
            <div className="relative  w-70 ">
              <img
                src={AS2}
                alt="models"
                className="rounded-2xl bg-[#c9c3e6] p-0"
              />
            </div>
            <div className="space-y">
              <Stat
                number="12,000+"
                title="Satisfied Clients"
                text="Cute fashion starts here-bright colors,soft materials,and feel-good styles made for women,men,and little ones.Simple,sweet,and always stylish."
              />
              <Stat
                number="2,560+"
                title="Complete Tasks"
                text="Soft tones,adorable details,and comfy silhouetters for everyone.Our clothing collection is made to make you look cute,feel confident,and shine your way."
              />
            </div>
            <div className="w-md h-1 bg-[#8b3a32]" />
            <div className="flex items-center gap-4">
              <img
                src={BD3}
                alt="Founder"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Liyana Perera</p>
                <p className="text-sm text-gray-500">
                  Founder Of Cotton Clouds
                </p>
              </div>
            </div>
            <button className="bg-[#8b3a32] hover:bg-[#732f29] text-white px-8 py-3 rounded-full transition">
              About Us More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
const Stat = ({ number, title, text }) => (
  <div>
    <h3 className="text-4xl font-bold text-[#8b3a32] mb-2">{number}</h3>
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-gray-600 text-sm max-w-md leading-relaxed">{text}</p>
  </div>
);
