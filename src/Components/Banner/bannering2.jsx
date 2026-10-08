import React from "react";
import fruitplate from "../../images/fruitplate.png";
import { motion } from "framer-motion";
import { FadeLeaf, FadeUp } from "../utility/animation";
export function Banner2() {
  return (
    <div className="">
      <div className="max-w-[330px] sm:max-w-[1170px] mx-auto py-14 space-y-6 md:space-y-0 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/**Brand info */}
          <div className="flex flex-col justify-center sm:justify-start  mt-[100px]">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                className="font-bold uppercase text-3xl"
              >
                Brand Info
              </motion.h1>
              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                aut error, fuga cumque fugit non est architecto numquam ut
                dolores beatae nesciunt, deleniti nam dolore veniam corporis eum
                laborum sed.
              </motion.p>
              <motion.p
                variants={FadeUp(1.2)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                eum culpa quisquam sed, asperiores facere quam quaerat maxime
              </motion.p>
              <motion.div
                variants={FadeUp(1.5)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
              >
                <button className="px-[20px] py-[8px] rounded-lg bg-pink-700 text-white">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
          {/**image Section */}
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, x: 200, rotate: 75 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              src={fruitplate}
              alt=""
              className="w-[300px]  object-cover lg:w-[450px]
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
