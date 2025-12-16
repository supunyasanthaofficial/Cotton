const ProductCard = ({ product }) => {
  return (
    <div
      className={`rounded-b-none p-4 shadow-md transition hover:scale-[1.02] ${product.bg}`}
    >
      <div className="flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-32.5[130px] h-25[100px] object-contain rounded-b-none"
        />
      </div>

      <h3 className="text-xl text-center font-bold text-gray-800 mb-2">
        {product.title}
      </h3>

      <div className="flex items-center justify-between mb-4">
        <p className="text-xl font-semibold text-gray-900">${product.price}</p>

        <div className="flex ">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-sm ${
                i < product.rating ? "text-orange-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <button className="bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-gray-800 transition">
        Shop Now
      </button>
    </div>
  );
};

export default ProductCard;
