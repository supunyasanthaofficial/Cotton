import React from "react";
import Header from "../components/Header";
import Header7 from "../assets/images/Header7.png";

export default function Sales() {
  return (
    <div>
      <Header
        images={[Header7]}
        autoSlide={false}
        height="h-[600px] md: h-[800px]"
      />
    </div>
  );
}
