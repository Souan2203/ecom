import React from "react";
import { useNavigate } from "react-router-dom";

import tra1 from "../assets/tra1.jpg";
import tra2 from "../assets/tra2.jpg";
import tra3 from "../assets/tra3.jpg";

const Traditional = () => {
  const navigate = useNavigate();

  const Tra = [
    {
      id: 1,
      name: "Traditional Kurta",
      image: tra1,
      price: 1650,
    },
    {
      id: 2,
      name: "Ethnic Sherwani",
      image: tra2,
      price: 1750,
    },
    {
      id: 3,
      name: "Classic Panjabi",
      image: tra3,
      price: 1550,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Traditional Collection
      </h1>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {Tra.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 sm:h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4 md:p-5">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                {item.name}
              </h2>

              <p className="text-xl sm:text-2xl font-bold text-green-600 mt-2">
                ₹{item.price}
              </p>

              <button
                onClick={() =>
                  navigate("/cart", {
                    state: {
                      name: item.name,
                      price: item.price,
                    },
                  })
                }
                className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Traditional;