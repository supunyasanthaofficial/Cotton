import React from "react";
import Header from "../components/Header";
import Header5 from "../assets/images/Header5.png";

export default function About() {
  return (
    <div className="relative">
      <Header
        images={[Header5]}
        autoSlide={false}
        height="h-[600px] md:h-[800px]"
      />
    </div>
  );
}
