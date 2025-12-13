import React from "react";
import Header from "../components/Header";

import Header6 from "../assets/images/Header6.png";

export default function NewArrivals() {
  return (
    <div>
      <Header
        images={[Header6]}
        autoSlide={false}
        height="h-[600px] md:h-[800px]"
      />
    </div>
  );
}
