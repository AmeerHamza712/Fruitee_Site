import React from "react";
import { motion } from "framer-motion";

// FadeUp is a function that returns animation variants
export const FadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay, // ✅ removed the dot (.)
      },
    },
  };
};
export const FadeLeaf = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay, // ✅ removed the dot (.)
      },
    },
  };
};
export const FadeRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay, // ✅ removed the dot (.)
      },
    },
  };
};

export const FadeLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        delay: delay, // ✅ removed the dot (.)
      },
    },
  };
};
