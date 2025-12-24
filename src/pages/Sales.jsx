import Header from "../components/Header";
import Header7 from "../assets/images/Header7.png";
import BestDeals from "../components/BestDeals";
import Snowfall from "react-snowfall";
export default function Sales() {
  return (
    <div>
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
      <Header
        images={[Header7]}
        autoSlide={false}
        height="h-[600px] md: h-[800px]"
      />
      <BestDeals />
    </div>
  );
}
