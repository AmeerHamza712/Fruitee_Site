import React from "react";
import fruitPlate from "../../images/fruitplate.png";
import leaf from "../../images/leaf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "../utility/animation";
export function Hero() {
  return (
    <div className=" relative">
      <div className="max-w-[1100px] mx-auto min-h-[550px] p-6 pt-[50px] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-4">
          {/**Column-1 */}
          <div
            className="text-center sm:text-left
            flex flex-col justify-center
            relative z-10 
             "
          >
            <div
              className="
            space-y-2 lg:max-w-[400px]
             "
            >
              <div>
                <motion.h1
                  variants={FadeRight(0.6)}
                  initial="hidden"
                  animate="visible"
                  className="text-6xl font-bold"
                >
                  Healthy
                </motion.h1>
                <motion.h2
                  variants={FadeRight(0.9)}
                  initial="hidden"
                  animate="visible"
                  className="text-6xl font-bold  "
                >
                  Fresh
                  <span className="text-orange-400 pl-2">Fruits!</span>
                </motion.h2>
              </div>
              <motion.p
                variants={FadeRight(1.2)}
                initial="hidden"
                animate="visible"
              >
                Order Now For Frest Healty life
              </motion.p>
              <motion.p
                variants={FadeRight(1.5)}
                initial="hidden"
                animate="visible"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                vel odio itaque inventore assumenda, voluptatibus quasi nulla
                sed officia molestiae, numquam dicta at aut nisi veniam ex.
                Saepe, quod tempora?
              </motion.p>
            </div>
          </div>
          {/**Column-2 */}
          <div
            className="flex items-center justify-center
        "
          >
            <motion.img
              initial={{ opacity: 0, x: 200, rotate: 75 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              src={fruitPlate}
              alt=""
              className="w-[300px] md:w-[450px]"
            />
          </div>
        </div>
        {/**Leaf Image */}
        <div>
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute top-[-50px] w-[200px] sm:w-[300px]
          opacity-[0.7] rotate-[40deg] right-1/4 sm:right-1/2 blur-sm
          "
            src={leaf}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
