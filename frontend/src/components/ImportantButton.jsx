import React from "react";
import { motion } from "framer-motion";

export default function ImportantButton({ label, action }) {
  return (
    <motion.button
      whileHover={{ opacity: 0.9, scale: 1.05 }}
      whileTap={{ y: 5 }}
      className="text-sm capitalize px-6 rounded-3xl mt-8 bg-brandRed shadow-3xl border-2 border-brandRed font-semibold sm:mt-0 md:text-xl md:px-20 md:py-2 lg:text-lg"
      onClick={action}
    >
      {label}
    </motion.button>
  );
}
