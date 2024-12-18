// Page.jsx (Music Page)
import { motion } from "framer-motion";
import { useState } from "react";

 // Import motion from framer-motion

export default function Page({ title, content, onBack }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4"
      initial={{ opacity: 0 }}  // Start with zero opacity
      animate={{ opacity: 1 }}  // Fade in to full opacity
      transition={{ duration: 1 }} // Set the duration for the animation
    >
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-8">{content}</p>

      <button
        onClick={onBack}
        className="mt-8 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
      >
        Back to Home
      </button>
    </motion.div>
  );
}




