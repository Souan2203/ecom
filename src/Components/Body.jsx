import React from "react";
import { motion } from "motion/react";

import ethenic from "../assets/ethenic.png";
import jewelarry from "../assets/jewelarry.png";
import headphone from "../assets/headphone.png";
import shoe from "../assets/shoe.png";
import formal from "../assets/fashion1.png";
import ldress from "../assets/ldress.png";
import regular from "../assets/regular.jpg"
import jordan from "../assets/airjordan.jpg";
import shirts from "../assets/shirts.jpg";
import oversize from "../assets/oversize.jpg"
import traditional from "../assets/traditional.jpg"
import { a } from "motion/react-client";


const Body = () => {
  const categories = [


    { name: "Regular wear", image: regular, link: "/regular" },
    { name: "Shoe", image: shoe, link: "/shoe" },
    { name: "Formal Wear", image: formal, link: "/formal" },
    { name: "Traditional Were", image: traditional, link: "/traditional" }

  ];

  const newArraivals = [
    { name: "Ladies Dress", image: ldress ,link: "/ladies"},
    { name: "Shoes", image: jordan , link: "/shoe"  },
    { name: "Shirts", image: shirts,link:"/shirt" },
    { name: "Over Size", image: oversize,link: "/over" },
    { name: "Regular Wear", image: regular,link: "/regular" },
    { name: "Traditional Were", image: traditional  ,link: "/traditional" }
  ];

  return (
    <>
      {/* Categories Section */}
      <section className="container mx-auto py-10 px-4">
        <div id="cata" className="flex justify-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-serif">
            Categories
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-lg md:text-xl font-serif">
          {categories.map((item, index) => (
            <a key={item.name} href={item.link}><motion.div
              
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="flex flex-col items-center"
            >
              <div className="relative overflow-hidden w-24 h-24 md:w-32 md:h-32 rounded-full cursor-pointer">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <p className="text-center mt-3">{item.name}</p>
            </motion.div></a>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-10">
        <div id="arr" className="flex justify-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-serif">
            New Arrivals
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center px-4">
          {newArraivals.map((itemn, index) => (
            <a key={itemn.name} href={itemn.link}><motion.div
              key={itemn.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="h-80 w-75 rounded-2xl overflow-hidden relative hover:scale-105 transition-all duration-300"
            >
              <img
                className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                src={itemn.image}
                alt={itemn.name}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-3">
                <h3 className="font-semibold">{itemn.name}</h3>
              </div>
            </motion.div></a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Body;
