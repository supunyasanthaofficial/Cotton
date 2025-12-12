import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaComment,
  FaQuestionCircle,
  FaTruck,
  FaExchangeAlt,
  FaChevronDown,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [openFAQs, setOpenFAQs] = useState([false, false, false]);

  const toggleFAQ = (index) => {
    const newOpenFAQs = [...openFAQs];
    newOpenFAQs[index] = !newOpenFAQs[index];
    setOpenFAQs(newOpenFAQs);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-white">
      <div className="bg-linear-to-r from-white to-white text-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Fill out
            the form below or use one of the other contact methods to reach our
            team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              {/* <FaEnvelope className="mr-3 text-rose-500" /> */}
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Phone number (Optional):
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                    placeholder="+94 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition resize-none"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-rose-400 to-rose-500 text-white py-4 px-10 rounded-full font-semibold text-lg transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl hover:from-rose-500 hover:to-rose-600"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                {/* <FaComment className="mr-3 text-blue-500" /> */}
                Customer Support
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-red-500 text-xl" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <a
                      href="mailto:support@aura.com"
                      className="text-black hover:text-blue-800 transition-colors"
                    >
                      support@aura.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-red-500 text-xl" />
                  <div>
                    <p className="font-medium">Phone:</p>
                    <a
                      href="tel:+10000000000"
                      className="text-black hover:text-blue-800 transition-colors"
                    >
                      +94 000-0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                {/* <FaMapMarkerAlt className="mr-3 text-green-500" /> */}
                Store Location
              </h3>
              <div className="space-y-6">
                <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1841872571663!2d80.67686019731812!3d7.278664776439835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367be19d02d7d%3A0xfa67bb9a7082d197!2sEVER%20EFFICIENT%20Business%20Management!5e0!3m2!1sen!2slk!4v1765258026244!5m2!1sen!2slk"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EVER EFFICIENT Business Management Location"
                    className="w-full h-64"
                  ></iframe>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-green-500 mt-1" />
                    <div>
                      <p className="font-bold text-lg">
                        Cotton Clouds Fashion Store
                      </p>
                      <p className="text-gray-600">
                        123 Fashion Ave, New York, NY 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-yellow-500" />
                    <div>
                      <p className="font-medium">Operating Hours:</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 8:00 PM
                      </p>
                      <p className="text-gray-600">
                        Saturday - Sunday: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <FaQuestionCircle className="mr-3 text-orange-500" />
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Find quick answers to common questions about orders, shipping,
            returns, and more.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="border border-gray-200 rounded-4xl overflow-hidden hover:shadow-md transition-shadow duration-300">
              <button
                className="w-full flex justify-between items-center p-6 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-left"
                onClick={() => toggleFAQ(0)}
              >
                <div className="flex items-center">
                  <FaComment className="text-purple-500 mr-3 text-lg" />
                  <span className="text-lg font-semibold text-gray-800">
                    How can I track my order?
                  </span>
                </div>
                <FaChevronDown
                  className={`text-gray-500 text-lg transition-transform duration-300 ${
                    openFAQs[0] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQs[0] && (
                <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-100">
                  <p className="text-gray-600">
                    Track your order using the link in your confirmation email
                    or through your account dashboard. You'll receive tracking
                    information once your order has shipped. For international
                    orders, tracking updates may take 24-48 hours to appear.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-4xl overflow-hidden hover:shadow-md transition-shadow duration-300">
              <button
                className="w-full flex justify-between items-center p-6 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-left"
                onClick={() => toggleFAQ(1)}
              >
                <div className="flex items-center">
                  <FaExchangeAlt className="text-green-500 mr-3 text-lg" />
                  <span className="text-lg font-semibold text-gray-800">
                    What is your return policy?
                  </span>
                </div>
                <FaChevronDown
                  className={`text-gray-500 text-lg transition-transform duration-300 ${
                    openFAQs[1] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQs[1] && (
                <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-100">
                  <p className="text-gray-600">
                    You can return unworn items within 30 days of purchase with
                    original tags attached. Items must be in their original
                    condition with all packaging. Refunds will be processed
                    within 5-10 business days after we receive the return. Sale
                    items are final sale unless defective.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-4xl overflow-hidden hover:shadow-md transition-shadow duration-300">
              <button
                className="w-full flex justify-between items-center p-6 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-left"
                onClick={() => toggleFAQ(2)}
              >
                <div className="flex items-center">
                  <FaTruck className="text-blue-500 mr-3 text-lg" />
                  <span className="text-lg font-semibold text-gray-800">
                    How long does shipping take?
                  </span>
                </div>
                <FaChevronDown
                  className={`text-gray-500 text-lg transition-transform duration-300 ${
                    openFAQs[2] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQs[2] && (
                <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-100">
                  <p className="text-gray-600">
                    We offer multiple shipping options:
                    <ul className="mt-2 space-y-1 ml-4 list-disc text-gray-600">
                      <li>
                        <span className="font-medium">Standard Shipping:</span>{" "}
                        5-7 business days
                      </li>
                      <li>
                        <span className="font-medium">Express Shipping:</span>{" "}
                        2-3 business days
                      </li>
                      <li>
                        <span className="font-medium">Overnight Shipping:</span>{" "}
                        Next business day (order before 2 PM EST)
                      </li>
                      <li>
                        <span className="font-medium">
                          International Shipping:
                        </span>{" "}
                        7-14 business days depending on destination
                      </li>
                    </ul>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
