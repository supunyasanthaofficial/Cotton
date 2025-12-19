import Header from "../components/Header";
import Header5 from "../assets/images/Header5.png";
import AboutSection from "../components/AboutSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";

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
          <WhyChooseUsSection/>
        </div>
      </section>
    </div>
  );
}
