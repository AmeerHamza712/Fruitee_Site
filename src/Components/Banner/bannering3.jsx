import React from "react";
import bannerbg from "../../images/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeaf, FadeLeft, FadeRight, FadeUp } from "../utility/animation";
export function Banner3() {
  const bgStyle = {
    backgroundImage: `url(${bannerbg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="overflow-x-hidden">
      <div
        className="max-w-[450px] sm:max-w-[1170px] mx-auto py-14
        p-6 sm:p-8 bg-fixed z-[100000]
        space-y-6 md:space-y-0 rounded-lg"
        style={bgStyle}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/**image Section */}

          {/**Blank image div */}
          <div></div>
          {/**Brand info */}
          <div className="flex flex-col justify-center sm:justify-start  mt-[100px]">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeLeft(0.5)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                className="font-bold uppercase text-3xl"
              >
                Brand Info
              </motion.h1>
              <motion.p
                variants={FadeLeft(0.9)}
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
                variants={FadeLeft(1.2)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                eum culpa quisquam sed, asperiores facere quam quaerat maxime
              </motion.p>
              <motion.div
                variants={FadeLeft(1.5)}
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
        </div>
      </div>
    </div>
  );
}
