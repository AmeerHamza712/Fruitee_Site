// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faCoffee,
//   faLeaf,
// } from "@fortawesome/free-solid-svg-icons";
// export function Footer() {
//   return (
//     <div>
//       <div className="max-w-[1100px] p-6  mx-auto flex justify-between items-center ">
//         {/**Logo Section */}
//         <div className="flex gap-1 items-center justify-center">
//           <p className="uppercase text-pink-400 font-bold text-lg">fruit</p>
//           <p className="uppercase text-orange-400 font-bold text-lg">Store</p>
//           <FontAwesomeIcon icon={faLeaf} className="text-green-500" />
//         </div>

//         {/** Icon Section */}
//         <div>
//           <FontAwesomeIcon icon={faFacebook} />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <div className="py-[40px] bg-pink-100 mt-[50px]">
      <div className=" w-full xxs:max-w-[320px] xs:max-w-[480px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] 3xl:max-w-[1920px] 4xl:max-w-[2560px] mx-auto">
        {/** Logo Section */}
        <div className="flex gap-1 items-center justify-center text-3xl">
          <p className="uppercase text-pink-400 font-bold text-3xl">fruit</p>
          <p className="uppercase text-orange-400 font-bold text-3xl">Store</p>
          <FontAwesomeIcon icon={faLeaf} className="text-green-500" />
        </div>

        {/** Social Icons Section */}
        <div className="flex gap-4  text-gray-600 text-3xl">
          <FontAwesomeIcon
            icon={faFacebook}
            className="hover:text-blue-600 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="hover:text-pink-500 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="hover:text-blue-700 cursor-pointer"
          />

          <FontAwesomeIcon
            icon={faYoutube}
            className="hover:text-red-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
