



import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Contact() {
  const { scene } = useGLTF("/models/zahl.glb"); // Load your 3D model (adjust the path)
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page
  };

  if (!scene) {
    return <div>Loading model...</div>; // Show a loading message if the model hasn't loaded
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-12 overflow-y-auto" // Ensure overflow-y-auto
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center sm:text-3xl md:text-4xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 mb-8 text-center sm:text-sm md:text-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Have any questions or feedback? Feel free to reach out!
      </motion.p>

      {/* 3D Model Canvas */}
      <div className="w-full max-w-2xl h-60 sm:h-40 md:h-48 bg-transparent rounded-lg mb-6">
        <Canvas
          camera={{ position: [0, 0, 3], fov: 50 }}
          style={{ background: "transparent" }} // Transparent background for the canvas
        >
          {/* Lighting */}
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <spotLight position={[0, 5, 10]} angle={0.15} intensity={2} castShadow />
          
          {/* 3D Model */}
          <primitive object={scene} scale={3.5} />
          <OrbitControls />
        </Canvas>
      </div>

      {/* Contact Form */}
      <form
        className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
        action="#"
        method="POST"
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring focus:ring-yellow-400 focus:outline-none"
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring focus:ring-yellow-400 focus:outline-none"
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <motion.textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring focus:ring-yellow-400 focus:outline-none"
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>

      {/* Go Back Home Button */}
      <motion.button
        onClick={handleGoHome}
        className="mt-6 bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Go Back Home
      </motion.button>
    </motion.div>
  );
}

