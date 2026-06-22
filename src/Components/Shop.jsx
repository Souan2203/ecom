import React from 'react'
import for1 from "../assets/for1.jpg";
import for2 from "../assets/for3.jpg";
import for3 from "../assets/for4.jpg";
import for4 from "../assets/for5.jpg";
import for5 from "../assets/for6.jpg";
import for6 from "../assets/for2.jpg";
import ldress1 from "../assets/ldress1.jpg";
import ldress2 from "../assets/ldress2.jpg";
import ldress3 from "../assets/ldress3.jpg";
import ldress4 from "../assets/ldress4.jpg";
import ldress5 from "../assets/ldress5.jpg";
import ldress6 from "../assets/ldress.png";
import over1 from "../assets/over1.jpeg";
import over2 from "../assets/over2.jpeg";
import over3 from "../assets/over3.jpeg";
import over4 from "../assets/over4.jpeg";
import over5 from "../assets/over5.jpeg";
import over6 from "../assets/oversize.jpg";
import reg1 from "../assets/regular.jpg";
import reg2 from "../assets/Reg2.jpg";
import reg3 from "../assets/reg3.jpg";
import reg4 from "../assets/reg4.jpg";
import reg5 from "../assets/reg5.jpg";
import reg6 from "../assets/reg6.jpg";
import srt1 from "../assets/srt1.jpeg";
import srt2 from "../assets/srt2.jpeg";
import srt3 from "../assets/srt3.jpeg";
import srt4 from "../assets/srt4.jpeg";
import srt5 from "../assets/srt5.jpeg";
import srt6 from "../assets/srt6.jpeg";
import shoe1 from "../assets/shoe.png";
import shoe2 from "../assets/shoe1.jpg";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";
import shoe5 from "../assets/shoe5.jpg";
import shoe6 from "../assets/shoe6.jpg";
import tra1 from "../assets/tra1.jpg";
import tra2 from "../assets/tra2.jpg";
import tra3 from "../assets/tra3.jpg";
import { useNavigate } from 'react-router-dom';


const Shop = () => {

  const navigate = useNavigate();
  const were = [
    {
      id: 1,
      name: "Classic White Oxford Shirt",
      image: for1,
      price: 775,
    },
    {
      id: 2,
      name: "Slim Fit Blue Formal Shirt",
      image: for2,
      price: 895,
    },
    {
      id: 3,
      name: "Premium Striped Business Shirt",
      image: for3,
      price: 1150,
    },
    {
      id: 4,
      name: "Solid Black Executive Shirt",
      image: for4,
      price: 789,
    },
    {
      id: 5,
      name: "Light Grey Formal Shirt",
      image: for5,
      price: 895,
    },
    {
      id: 6,
      name: "Navy Blue Office Wear Shirt",
      image: for6,
      price: 897,
    },

    {
      id: 7,
      name: "Floral Maxi Dress",
      image: ldress1,
      price: 1995
    },
    {
      id: 8,
      name: "Elegant Evening Gown",
      image: ldress2,
      price: 1984
    },
    {
      id: 9,
      name: "Casual Summer Dress",
      image: ldress3,
      price: 995
    },
    {
      id: 10,
      name: "Printed Anarkali Dress",
      image: ldress4,
      price: 1250
    },
    {
      id: 11,
      name: "Chic Midi Dress",
      image: ldress5,
      price: 888
    },
    {
      id: 12,
      name: "Party Wear A-Line Dress",
      image: ldress1,
      price: 1199
    },
    {
      id: 13,
      name: "Oversized Graphic T-Shirt",
      image: over1,
      price: 999
    },
    {
      id: 14,
      name: "Oversized Cotton Hoodie",
      image: over2,
      price: 1299
    },
    {
      id: 15,
      name: "Oversized Streetwear Tee",
      image: over3,
      price: 1099
    },
    {
      id: 16,
      name: "Oversized Printed Sweatshirt",
      image: over4,
      price: 1499
    },
    {
      id: 17,
      name: "Oversized Casual Shirt",
      image: over5,
      price: 1199
    },
    {
      id: 18,
      name: "Oversized Drop-Shoulder T-Shirt",
      image: over6,
      price: 899
    },
    {
      id: 19,
      name: "Classic Cotton T-Shirt",
      image: reg1,
      price: 989
    },
    {
      id: 20,
      name: "Casual Round Neck Tee",
      image: reg2,
      price: 899
    },
    {
      id: 21,
      name: "Regular Fit Polo Shirt",
      image: reg3,
      price: 1199
    },
    {
      id: 22,
      name: "Everyday Crew Neck T-Shirt",
      image: reg4,
      price: 799
    },
    {
      id: 23,
      name: "Premium Casual Shirt",
      image: reg5,
      price: 1299
    },
    {
      id: 24,
      name: "Solid Color Cotton Tee",
      image: reg6,
      price: 949
    },
    {
      id: 25,
      name: "Shirt",
      image: srt1,
      price: 999
    }, {
      id: 26,
      name: "Formal White Shirt",
      image: srt2,
      price: 999
    },
    {
      id: 27,
      name: "Slim Fit Blue Shirt",
      image: srt3,
      price: 1099
    },
    {
      id: 28,
      name: "Checked Casual Shirt",
      image: srt4,
      price: 1199
    },
    {
      id: 29,
      name: "Black Cotton Shirt",
      image: srt5,
      price: 999
    },
    {
      id: 30,
      name: "Denim Shirt",
      image: srt6,
      price: 1299
    },
    {
      id: 31,
      name: "Shoe",
      image: shoe1,
      price: 1900
    },
    {
      id: 32,
      name: "Running Shoe",
      image: shoe2,
      price: 1999
    },
    {
      id: 33,
      name: "Sports Trainer",
      image: shoe3,
      price: 2199
    },
    {
      id: 34,
      name: "Casual Sneaker",
      image: shoe4,
      price: 1899
    },
    {
      id: 35,
      name: "White Sneakers",
      image: shoe5,
      price: 2499
    },
    {
      id: 36,
      name: "Black Running Shoe",
      image: shoe6,
      price: 2299
    },

  ]
  return (
    <section className="min-h-screen bg-gray-50 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        All Fashion Collection
      </h1>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {were.map((item) => (
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
  )
}

export default Shop