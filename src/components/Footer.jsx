import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e3abaa] text-black mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">COTTON CLOUDS</h3>
            <p className="text-black mb-4">
              Discover Clothing made to make you smile - soft fabrics, comfy
              fits, and stylish pieces for everyone in the family. Cute, cozy,
              and cafted with love.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-pink-400 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-blue-300 cursor-pointer" />
              <FaYoutube className="text-2xl hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-black hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/fashions" className="text-black hover:text-white">
                  Collections
                </a>
              </li>
              <li>
                <a href="/new-arrivals" className="text-black hover:text-white">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/sales" className="text-black hover:text-white">
                  Sale
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Customer Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-vlack hover:text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-black">
              <p>123 Ocean Beach, New York, NY 10001</p>
              <p>support@cottonclouds.com</p>
              <p>+1 (254) 954-990</p>
              <p>Mon-Fri: 9am-8pm EST</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-black">
            © 2024 Cotton Clouds. All Rights Reserved | Made with{" "}
            <FaHeart className="inline text-red-500" /> by Cotton Clouds Team
          </p>
          <p className="text-black text-sm mt-2">
            Privacy Policy | Terms of Service | Cookie Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
