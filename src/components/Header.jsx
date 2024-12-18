import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import { motion } from "framer-motion"; // Import motion from framer-motion
export default function Header() {
  return (
    <header className="fixed top-2 left-0 w-full bg-black bg-opacity-50 text-white z-10">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "easeOut", delay: 1 }}
          style={{ overflow: "hidden" }}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
          >
            Welcome.
          </NavLink>
        </motion.h1>

        <nav className="space-x-4">
          <NavLink
            to="/music"
            className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
          >
            Music
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400")}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}







