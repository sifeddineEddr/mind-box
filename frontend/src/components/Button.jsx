import React from "react";
import { motion } from "framer-motion";

export default function Button({ label, action }) {
  return (
    <motion.button
      whileHover={{ opacity: 0.9, scale: 1.05 }}
      whileTap={{ y: 5 }}
      className="text-sm capitalize rounded-3xl md:mt-8 bg-brandRed font-semibold md:text-xl px-10 py-1 lg:text-lg"
      onClick={action}
    >
      {label}
    </motion.button>
  );
}
