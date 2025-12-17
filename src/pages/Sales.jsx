import Header from "../components/Header";
import Header7 from "../assets/images/Header7.png";
import BestDeals from "../components/BestDeals";

export default function Sales() {
  return (
    <div>
      <Header
        images={[Header7]}
        autoSlide={false}
        height="h-[600px] md: h-[800px]"
      />
      <BestDeals />
    </div>
  );
}
