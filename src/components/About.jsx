



import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="p-8 bg-gradient-to-br from-gray-800 to-black text-white min-h-screen"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl">Learn more about who we are and what we do.</p>
      </motion.div>

      {/* Mission Section with Image on the Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Text Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p>
            Our mission is to inspire and connect people through our music,
            innovation, and creativity.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-6 rounded-lg shadow-lg flex justify-center items-center"
        >
          <img
            src="/img/drums2.png" // Replace with your image path
            alt="Mission Image"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Vision Section with Image on the Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Text Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p>
            We aim to create experiences that transcend boundaries and bring
            joy to people's lives.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-6 rounded-lg shadow-lg flex justify-center items-center"
        >
          <img
            src="/img/mad3.png" // Replace with your image path
            alt="Vision Image"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-l-4 border-yellow-400 pl-6"
        >
          <h3 className="text-2xl font-bold">2020</h3>
          <p>Our journey.</p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border-l-4 border-yellow-400 pl-6"
        >
          <h3 className="text-2xl font-bold">2022</h3>
          <p>We released our songs .</p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="border-l-4 border-yellow-400 pl-6"
        >
          <h3 className="text-2xl font-bold">2023</h3>
          <p>
            Expanded into new genres and continued to push creative boundaries.
          </p>
        </motion.div>
      </div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-12 text-center"
      >
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition"
        >
          Go Back Home
        </button>
      </motion.div>
    </motion.div>
  );
};

export default About;






