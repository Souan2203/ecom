import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Gen Z's</h2>
            <p className="text-gray-400 leading-relaxed">
              Discover the latest fashion, electronics, accessories, and more.
              Quality products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#cata" className="hover:text-white transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  New Arrivals
                </a>
              </li>
              
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Gen Z's. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-gray-400">
            <a href="/" className="hover:text-white transition">
              Facebook
            </a>
            <a href="/" className="hover:text-white transition">
              Instagram
            </a>
            <a href="/" className="hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;