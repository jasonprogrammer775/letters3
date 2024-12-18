
import { motion } from "framer-motion"; 
import { NavLink } from "react-router-dom";

const AnimateHeader = () => {
  return (
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
  );
};

export default AnimateHeader;




