import React from "react";
import { useNavigate } from "react-router-dom";

import ldress1 from "../assets/srt1.jpeg";
import ldress2 from "../assets/srt2.jpeg";
import ldress3 from "../assets/srt3.jpeg";
import ldress4 from "../assets/srt4.jpeg";
import ldress5 from "../assets/srt5.jpeg";
import ldress6 from "../assets/srt6.jpeg";

const Shirt = () => {
  const navigate = useNavigate();

  const wear = [
    {
      id: 1,
      name: "Classic White Formal Shirt",
      image: ldress1,
      price: 650,
    },
    {
      id: 2,
      name: "Slim Fit Casual Shirt",
      image: ldress2,
      price: 750,
    },
    {
      id: 3,
      name: "Checked Cotton Shirt",
      image: ldress3,
      price: 550,
    },
    {
      id: 4,
      name: "Premium Oxford Shirt",
      image: ldress4,
      price: 950,
    },
    {
      id: 5,
      name: "Denim Full Sleeve Shirt",
      image: ldress5,
      price: 850,
    },
    {
      id: 6,
      name: "Printed Casual Shirt",
      image: ldress6,
      price: 900,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Regular Wear Collection
      </h1>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wear.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            {/* Product Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 sm:h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 md:p-5 flex flex-col flex-grow">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                {item.name}
              </h2>

              <p className="text-xl sm:text-2xl font-bold text-green-600 mt-2">
                ₹{item.price}
              </p>

              <button
                type="button"
                onClick={() =>
                  navigate("/cart", {
                    state: {
                      name: item.name,
                      price: item.price,
                    },
                  })
                }
                className="w-full mt-auto bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shirt;