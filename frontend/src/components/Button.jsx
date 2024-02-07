import React from "react";
import { motion } from "framer-motion";

export default function Button({ label, action }) {
  return (
    <motion.button
      whileHover={{ opacity: 0.9, scale: 1.05 }}
      whileTap={{ y: 5 }}
      className="text-sm capitalize rounded-3xl mt-8 bg-brandRed font-semibold md:text-xl md:px-10 md:py-1 lg:text-lg"
      onClick={action}
    >
      {label}
    </motion.button>
  );
}
