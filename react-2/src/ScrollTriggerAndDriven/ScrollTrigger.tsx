import { motion } from "framer-motion";

const ScrollTrigger = () => {
  return (
    <motion.div
      whileInView={{ scale: 2, y: -100 }}
      initial={{ scale: 0.3, y: 200 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="box"
    />
  );
};

export default ScrollTrigger;
