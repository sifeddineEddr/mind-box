import React from "react";
import { motion } from "framer-motion";

export default function ImportantButton({ label, action }) {
  return (
    <motion.button
      whileHover={{ opacity: 0.9, scale: 1.05 }}
      whileTap={{ y: 5 }}
      className="px-20 py-2 rounded-3xl bg-brandRed shadow-3xl border-2 border-brandRed font-semibold text-lg capitalize"
      onClick={action}
    >
      {label}
    </motion.button>
  );
}
