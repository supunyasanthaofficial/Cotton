// import logo from "../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e3abaa] text-black mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* <img
            src={logo}
            alt="cotton cloud logo"
            className="h-10 w-auto mr-3"
          /> */}

          <div>
            <p className="text-black font-bold mb-4">
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
            <h4 className="text-xl font-bold mb-4">Join Our Newsletter</h4>
            <p className="text-xl font-semibold mb-4">
              Get 10% off your first order
            </p>
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="grow px-6 py-3 border border-[#A70011] bg-white rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
                <button className="bg-[#a70011] text-white px-8 py-3 rounded-4xl font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-black font-semibold">
            2025 © All Right Reserved | Cotton Clouds | Designed & Developed by
            EVER EFFCIENT Business Management (Pvt) Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
