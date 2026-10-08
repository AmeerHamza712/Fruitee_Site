import React from "react";
import apple from "../../images/apple.png";
import orange from "../../images/orange.png";
import avocado from "../../images/avocado.png";
import cherry from "../../images/cherry.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "../utility/animation";
export function Menu() {
  const Menulink = [
    {
      id: 1,
      img: apple,
      price: "$3.0",
      link: "/",
      title: "Fresh Red Apple",
      delay: 0.4,
    },
    {
      id: 2,
      img: orange,
      price: "$5.0",
      link: "/",
      title: "Fresh Oranges",
      delay: 0.6,
    },
    {
      id: 3,
      img: avocado,
      price: "$3.0",
      link: "/",
      title: "Fresh Avocadoes",
      delay: 0.9,
    },
    {
      id: 4,
      img: cherry,
      price: "$3.0",
      link: "/",
      title: "Fresh Cherry",
      delay: 1.2,
    },
  ];

  return (
    <div>
      <div className="max-w-[1100px] mx-auto p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
          {Menulink.map((data, i) => {
            return (
              <motion.div
                variants={FadeLeft(data.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="shadow-2xl rounded-xl flex gap-4 
              p-4
              items-center justify-center mb-6"
              >
                <img
                  className="scale-105 transform -translate-y-6 w-[60px]"
                  src={data.img}
                  alt=""
                />
                <div className="flex flex-col items-start text-left">
                  <h1 className="font-bold text-sm sm:text-md ">
                    {data.title}
                  </h1>
                  <h2 className="text-orange-400 text-sm sm:text:sm">
                    {data.price}
                  </h2>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
