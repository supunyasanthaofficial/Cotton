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
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const faqItems = [
    {
      question: "What are your shipping options?",
      answer:
        "We offer standard (5-7 business days), express (2-3 business days), and overnight shipping.",
      icon: <FaTruck className="text-blue-500" />,
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return unworn items within 30 days of purchase with original tags attached.",
      icon: <FaExchangeAlt className="text-green-500" />,
    },
    {
      question: "How can I track my order?",
      answer:
        "Track your order using the link in your confirmation email or through your account dashboard.",
      icon: <FaComment className="text-purple-500" />,
    },
  ];

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
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-500 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            "Have a question or feedback? We'd love to hear from you. Fill out
            the form below or use one of the other contact methods to reach our
            team."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="border-t-2 border-gray-300 my-8"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <FaEnvelope className="mr-3 text-blue-500" />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="+1 (234) 567-8900"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Your Message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & FAQ */}
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaComment className="mr-3 text-green-500" />
                Customer Support
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-blue-500 text-xl" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <a
                      href="mailto:support@cottonclouds.com"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      support@cottonclouds.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-green-500 text-xl" />
                  <div>
                    <p className="font-medium">Phone:</p>
                    <a
                      href="tel:+1254954990"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      +1 (254) 954-990
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaComment className="text-purple-500 text-xl" />
                  <div>
                    <p className="font-medium">Live Chat:</p>
                    <button className="text-blue-600 hover:text-blue-800">
                      Start Chat with Webmaster
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaMapMarkerAlt className="mr-3 text-red-500" />
                Store Location
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-red-500 mt-1" />
                  <div>
                    <p className="font-bold text-lg">
                      Cotton Clouds Fashion Store
                    </p>
                    <p className="text-gray-600">
                      123 Ocean Beach, New York, NY 10001
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

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <FaQuestionCircle className="mr-3 text-orange-500" />
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Find quick answers to common questions about orders, shipping,
            returns, and more.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h4 className="text-xl font-bold ml-3">{item.question}</h4>
                </div>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <button className="bg-linear-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
              GET IN TOUCH VIA SUPPORT
            </button>
            <button className="bg-linear-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
              SALES AND MARKETING
            </button>
            <button className="bg-linear-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
              VISIT OUR STORE LOCATIONS
            </button>
          </div>
        </div>

        <div className="mt-20 bg-linear-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get exclusive updates on new arrivals, special offers, and fashion
              tips delivered straight to your inbox.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="grow px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="font-bold text-lg mb-2">Follow Us</p>
              <div className="flex justify-center md:justify-end space-x-4">
                <button className="w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                  F
                </button>
                <button className="w-10 h-10 bg-pink-500 text-white rounded-full hover:bg-pink-600">
                  I
                </button>
                <button className="w-10 h-10 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                  T
                </button>
                <button className="w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600">
                  Y
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
