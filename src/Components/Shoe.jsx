import React from "react";
import { useNavigate } from "react-router-dom";

import shoe1 from "../assets/shoe.png";
import shoe2 from "../assets/shoe1.jpg";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";
import shoe5 from "../assets/shoe5.jpg";
import shoe6 from "../assets/shoe6.jpg";

const Shoe = () => {
  const navigate = useNavigate();

  const shoes = [
    {
      id: 1,
      name: "Nike Air Max",
      image: shoe1,
      price: 1650,
    },
    {
      id: 2,
      name: "Adidas Runner",
      image: shoe2,
      price: 1750,
    },
    {
      id: 3,
      name: "Nike Revolution",
      image: shoe3,
      price: 1550,
    },
    {
      id: 4,
      name: "Jordan Retro",
      image: shoe4,
      price: 2950,
    },
    {
      id: 5,
      name: "Jordan High",
      image: shoe5,
      price: 3850,
    },
    {
      id: 6,
      name: "Jordan Premium",
      image: shoe6,
      price: 5900,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Shoe Collection
      </h1>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {shoes.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
            <div className="p-4 md:p-5">
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
                className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition duration-300"
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

export default Shoe;