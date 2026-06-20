import React from "react";
import { useNavigate } from "react-router-dom";

import regular from "../assets/regular.jpg";
import reg2 from "../assets/reg2.jpg";
import reg3 from "../assets/reg3.jpg";
import reg4 from "../assets/reg4.jpg";
import reg5 from "../assets/reg5.jpg";
import reg6 from "../assets/reg6.jpg";

const Regular = () => {
  const navigate = useNavigate();

  const wear = [
    {
      id: 1,
      name: "XOXO Regular Wear",
      image: regular,
      price: 650,
    },
    {
      id: 2,
      name: "Flite Regular Wear",
      image: reg2,
      price: 750,
    },
    {
      id: 3,
      name: "Starboy Regular Wear",
      image: reg3,
      price: 550,
    },
    {
      id: 4,
      name: "Red Tape Regular Wear",
      image: reg4,
      price: 950,
    },
    {
      id: 5,
      name: "GIVA Regular Wear",
      image: reg5,
      price: 850,
    },
    {
      id: 6,
      name: "Pixo Regular Wear",
      image: reg6,
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

export default Regular;