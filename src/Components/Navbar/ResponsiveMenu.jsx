import React from "react";
import { motion, AnimatePresence } from "framer-motion";
export function ResponsiveMenu({ open }) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <div
          className={`absolute top-[50px] p-6 h-screen w-full left-0 z-20
    `}
        >
          <div className="bg-pink-400 rounded-xl p-4 ">
            <ul className="flex flex-col gap-4 items-center text-white">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Product</li>
            </ul>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
