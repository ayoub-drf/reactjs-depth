import { motion } from "framer-motion";

const LoaderOne = () => {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ borderBottomColor: "transparent" }}
      className="!bg-none !mt-0 box border-solid border-7 border-red-800"
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ borderTopColor: "transparent" }}
        className="!bg-none !mt-0 border-solid box border-7 border-blue-800"
      />
    </motion.div>
  );
};

export default LoaderOne;
