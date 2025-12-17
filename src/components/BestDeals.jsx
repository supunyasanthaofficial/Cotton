import React, { useState, useMemo } from "react";
import BD1 from "../assets/images/BD1.png";
import BD2 from "../assets/images/BD2.png";
import BD3 from "../assets/images/BD3.png";

const products = [
  {
    title: "Long Casual Dress",
    image: BD1,
    oldPrice: 120,
    price: 99,
    colour: "red",
    sizes: ["S", "M", "L"],
    type: "Clothing",
    brand: "Zara",
    rating: 4.5,
    inStock: true,
  },
  {
    title: "Men’s Office Wear",
    image: BD2,
    oldPrice: 150,
    price: 120,
    colour: "black",
    sizes: ["M", "L", "XL"],
    type: "Clothing",
    brand: "Puma",
    rating: 4.2,
    inStock: true,
  },
  {
    title: "Ladies Sandals",
    image: BD3,
    oldPrice: 20,
    price: 10,
    colour: "brown",
    sizes: ["M", "L"],
    type: "Shoes Collection",
    brand: "Nike",
    rating: 3.8,
    inStock: false,
  },
  {
    title: "Classic Hand Bag",
    image: BD1,
    oldPrice: 90,
    price: 70,
    colour: "red",
    sizes: ["M"],
    type: "Hand Bags",
    brand: "Zara",
    rating: 4.6,
    inStock: true,
  },
  {
    title: "Men Sneakers",
    image: BD2,
    oldPrice: 130,
    price: 99,
    colour: "black",
    sizes: ["M", "L"],
    type: "Shoes Collection",
    brand: "Nike",
    rating: 4.4,
    inStock: true,
  },
  {
    title: "Summer Top",
    image: BD1,
    oldPrice: 60,
    price: 45,
    colour: "red",
    sizes: ["S", "M"],
    type: "Clothing",
    brand: "Adidas",
    rating: 4.0,
    inStock: true,
  },
  {
    title: "Casual Shirt",
    image: BD2,
    oldPrice: 80,
    price: 65,
    colour: "black",
    sizes: ["M", "L"],
    type: "Clothing",
    brand: "Puma",
    rating: 3.9,
    inStock: false,
  },
  {
    title: "Leather Wallet",
    image: BD3,
    oldPrice: 40,
    price: 25,
    colour: "brown",
    sizes: ["M"],
    type: "Accessories",
    brand: "Adidas",
    rating: 4.7,
    inStock: true,
  },
  {
    title: "Ladies Heels",
    image: BD3,
    oldPrice: 110,
    price: 85,
    colour: "black",
    sizes: ["S", "M", "L"],
    type: "Shoes Collection",
    brand: "Zara",
    rating: 4.3,
    inStock: true,
  },
];

const FilterSidebar = ({
  availability,
  setAvailability,
  setPriceFrom,
  setPriceTo,
  setSelectedColour,
  setSelectedSize,
  setSelectedTypes,
  setSelectedBrands,
}) => (
  <aside className="border bg-white p-4 text-sm space-y-6 max-h-[100vh] overflow-y-auto">
    <h3 className="font-bold text-xl">Filter :</h3>

    <div>
      <p className="font-bold text-xl mb-2">Availability</p>
      <select
        className="w-full border p-2"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
      >
        <option value="all">All</option>
        <option value="in">In Stock</option>
        <option value="out">Out of Stock</option>
      </select>
    </div>

    <div>
      <p className="font-bold text-xl mb-2">Price</p>
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="From"
          className="border w-1/2 p-1"
          onChange={(e) => setPriceFrom(e.target.value)}
        />
        <input
          type="number"
          placeholder="To"
          className="border w-1/2 p-1"
          onChange={(e) => setPriceTo(e.target.value)}
        />
      </div>
      <button className="mt-5 bg-pink-400 text-white text-xs px-5 py-2 rounded-full">
        APPLY
      </button>
    </div>

    <div>
      <p className="font-bold text-xl mb-2">Colour</p>
      <div className="flex gap-2 flex-wrap">
        {["red", "black", "brown"].map((c) => (
          <span
            key={c}
            onClick={() => setSelectedColour(c)}
            className="w-4 h-4 rounded-full cursor-pointer border"
            style={{ background: c }}
          />
        ))}
      </div>
    </div>

    <div>
      <p className="font-bold text-xl mb-2">Size</p>
      <div className="flex gap-4 flex-wrap">
        {["S", "M", "L", "XL"].map((s) => (
          <span
            key={s}
            onClick={() => setSelectedSize(s)}
            className="border px-2 py-1 text-xs cursor-pointer"
          >
            {s}
          </span>
        ))}
      </div>
    </div>

    <div>
      <p className="font-bold text-xl mb-2">Product Type</p>
      {["Clothing", "Accessories", "Hand Bags", "Shoes Collection"].map((t) => (
        <label key={t} className="block">
          <input
            type="checkbox"
            className="mr-2"
            onChange={(e) =>
              setSelectedTypes((prev) =>
                e.target.checked ? [...prev, t] : prev.filter((x) => x !== t)
              )
            }
          />
          {t}
        </label>
      ))}
    </div>

    <div>
      <p className="font-bold text-xl mb-2">Brands</p>
      {["Nike", "Adidas", "Zara", "Puma"].map((b) => (
        <label key={b} className="block">
          <input
            type="checkbox"
            className="mr-2"
            onChange={(e) =>
              setSelectedBrands((prev) =>
                e.target.checked ? [...prev, b] : prev.filter((x) => x !== b)
              )
            }
          />
          {b}
        </label>
      ))}
    </div>
  </aside>
);

const ProductCard = ({ product }) => (
  <div className="border bg-white shadow-sm relative hover:shadow-md transition">
    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1">
      SALE
    </span>

    {!product.inStock && (
      <span className="absolute top-0 left-0 bg-gray-600 text-white text-xs px-2 py-1">
        OUT OF STOCK
      </span>
    )}

    <div className="h-72  bg-gray-100 flex items-center justify-center">
      <img src={product.image} alt={product.title} className="max-h-full" />
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-sm mb-1">{product.title}</h3>

      <div className="flex gap-2 text-sm mb-3 justify-between items-center">
        <div className="flex gap-2">
          <span className="line-through text-gray-400">
            ${product.oldPrice}
          </span>
          <span className="font-bold">${product.price}</span>
        </div>
        <div className="text-orange-400 text-sm">
          {"★".repeat(Math.round(product.rating))}
        </div>
      </div>

      <div className="flex gap-2 justify-between items-start">
        <button className="bg-black text-white text-xs px-6 py-2 rounded-full">
          Shop Now
        </button>

        <div className="flex gap-1 flex-wrap justify-end">
          {product.sizes.map((s) => (
            <span key={s} className="border text-[10px] px-1">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const BestDeals = () => {
  const [availability, setAvailability] = useState("all");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [selectedColour, setSelectedColour] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (availability === "in" && !p.inStock) return false;
      if (availability === "out" && p.inStock) return false;
      if (priceFrom && p.price < priceFrom) return false;
      if (priceTo && p.price > priceTo) return false;
      if (selectedColour && p.colour !== selectedColour) return false;
      if (selectedSize && !p.sizes.includes(selectedSize)) return false;
      if (selectedTypes.length && !selectedTypes.includes(p.type)) return false;
      if (selectedBrands.length && !selectedBrands.includes(p.brand))
        return false;
      return true;
    });
  }, [
    availability,
    priceFrom,
    priceTo,
    selectedColour,
    selectedSize,
    selectedTypes,
    selectedBrands,
  ]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-1 bg-red-600 rounded-full"></div>
          <h2 className="font-semibold text-lg">Best Deals</h2>
        </div>
        <select className="border p-2 rounded text-sm">
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>

          <option>Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <FilterSidebar
          availability={availability}
          setAvailability={setAvailability}
          setPriceFrom={setPriceFrom}
          setPriceTo={setPriceTo}
          setSelectedColour={setSelectedColour}
          setSelectedSize={setSelectedSize}
          setSelectedTypes={setSelectedTypes}
          setSelectedBrands={setSelectedBrands}
        />

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
