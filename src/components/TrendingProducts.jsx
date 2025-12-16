import React from "react";
import ProductCard from "./ProductCard";

// Images
import TP1 from "../assets/images/TP1.png";
import TP2 from "../assets/images/TP2.png";
import TP3 from "../assets/images/TP3.png";
import TP4 from "../assets/images/TP4.png";
import TP5 from "../assets/images/TP5.png";
import TP6 from "../assets/images/TP6.png";
import TP7 from "../assets/images/TP7.png";
import TP8 from "../assets/images/TP8.png";
import TP9 from "../assets/images/TP9.png";

const products = [
  {
    title: "Box Type Ladies Hand Bag",
    price: "75.00",
    rating: 5,
    image: TP1,
    bg: "bg-[#AC590B66]/90",
  },
  {
    title: "Olive Green Long Dress",
    price: "200.00",
    rating: 4,
    image: TP2,
    bg: "bg-[#78B98696]/79",
  },
  {
    title: "Purple Maxi Dress",
    price: "150.00",
    rating: 5,
    image: TP3,
    bg: "bg-[#D9D9D9]/100",
  },
  {
    title: "Cloud Blue Men’s Office Ware",
    price: "20.00",
    rating: 5,
    image: TP4,
    bg: "bg-[#CDC6FF]",
  },
  {
    title: "Chunky Sneakers",
    price: "50.00",
    rating: 5,
    image: TP5,
    bg: "bg-[#FFDDC6]",
  },
  {
    title: "Golden Ladies Watch",
    price: "12.00",
    rating: 4,
    image: TP6,
    bg: "bg-[#A6001185]/52",
  },
  {
    title: "Kids Ware Kite",
    price: "99.00",
    rating: 5,
    image: TP7,
    bg: "bg-[#FFDDC6]",
  },
  {
    title: "Golden Colour Women’s Jewellery Set",
    price: "500.00",
    rating: 5,
    image: TP8,
    bg: "bg-[#1F274F66]/40",
  },
  {
    title: "Little Yellow Dress",
    price: "145.00",
    rating: 5,
    image: TP9,
    bg: "bg-[#FFD0145C]/36",
  },
];

const TrendingProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-center text-5xl font-bold mb-10">
        TRENDING PRODUCTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
