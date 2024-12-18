import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Music = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Our Music</h1>
      <p className="text-center mb-12 text-lg">Discover our albums, videos, and follow us on social media!</p>

      {/* Social Media Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* SoundCloud */}
        <motion.div
          className="p-6 bg-black text-white rounded-lg text-center shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-bold text-xl mb-4">SoundCloud</h3>
          <p>Listen to our latest tracks.</p>
          <a
            href="https://soundcloud.com/zahlband"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 mt-4 inline-block"
          >
            Visit SoundCloud
          </a>
        </motion.div>

        {/* YouTube */}
        <motion.div
          className="p-6 bg-black text-white rounded-lg text-center shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-bold text-xl mb-4">YouTube</h3>
          <p>Watch our latest music videos.</p>
          <a
            href="https://youtube.com/your-channel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 mt-4 inline-block"
          >
            Visit YouTube
          </a>
        </motion.div>

        {/* Instagram */}
        <motion.div
          className="p-6 bg-black text-white rounded-lg text-center shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-bold text-xl mb-4">Instagram</h3>
          <p>Follow us for daily updates.</p>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 mt-4 inline-block"
          >
            Visit Instagram
          </a>
        </motion.div>

        {/* Twitter */}
        <motion.div
          className="p-6 bg-black text-white rounded-lg text-center shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-bold text-xl mb-4">Twitter</h3>
          <p>Stay updated with our tweets.</p>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 mt-4 inline-block"
          >
            Visit Twitter
          </a>
        </motion.div>

        {/* Facebook */}
        <motion.div
          className="p-6 bg-black text-white rounded-lg text-center shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="font-bold text-xl mb-4">Facebook</h3>
          <p>Connect with us on Facebook.</p>
          <a
            href="https://facebook.com/your-page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 mt-4 inline-block"
          >
            Visit Facebook
          </a>
        </motion.div>
      </div>

      {/* Go Back Home Button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => navigate("/")} // Navigate back to home
          className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow hover:bg-yellow-500 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </motion.div>
  );
};

export default Music;



  





