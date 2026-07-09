import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaCreditCard, FaTruck } from "react-icons/fa";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fffaf7] text-black">
      <section className="bg-linear-to-r from-[#ffe7db] to-[#fff4eb] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Checkout</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Review your order and complete your purchase in just a few steps.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
        <div className="bg-white rounded-3xl shadow-sm border border-[#f1d5c8] p-8">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <p className="font-semibold">Long Casual Dress</p>
                <p className="text-sm text-gray-500">Color: Red • Size: M</p>
              </div>
              <p className="font-semibold">$99</p>
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <p className="font-semibold">Classic Hand Bag</p>
                <p className="text-sm text-gray-500">Color: Red • Qty: 1</p>
              </div>
              <p className="font-semibold">$70</p>
            </div>

            <div className="flex justify-between pt-2 text-lg font-semibold">
              <span>Total</span>
              <span>$169</span>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-[#fff0e8] p-4">
            <div className="flex items-center gap-3 mb-2">
              <FaTruck className="text-[#a70011]" />
              <p className="font-semibold">Fast delivery</p>
            </div>
            <p className="text-sm text-gray-700">
              Your order will be packed and shipped within 24 hours.
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-[#f9f9f9] p-4">
            <div className="flex items-center gap-3 mb-2">
              <FaCreditCard className="text-[#a70011]" />
              <p className="font-semibold">Secure payment</p>
            </div>
            <p className="text-sm text-gray-700">
              Pay safely with card, bank transfer, or cash on delivery.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-[#f1d5c8] p-8">
          <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a70011] outline-none"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a70011] outline-none"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a70011] outline-none"
              required
            />

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Delivery Address"
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a70011] outline-none"
              required
            />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a70011] outline-none"
                required
              />

              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Postal Code"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a70011] outline-none"
                required
              />
            </div>

            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Order Note (optional)"
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a70011] outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#a70011] text-white py-3 rounded-full font-semibold hover:bg-[#8a000e] transition"
            >
              Place Order
            </button>
          </form>

          {submitted && (
            <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700 flex items-center gap-3">
              <FaCheckCircle />
              <p>
                Your order request has been received. We’ll contact you soon.
              </p>
            </div>
          )}

          <Link
            to="/fashions"
            className="mt-6 inline-block text-sm text-[#a70011] hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
