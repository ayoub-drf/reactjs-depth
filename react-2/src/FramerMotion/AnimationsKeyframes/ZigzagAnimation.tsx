import { motion } from "framer-motion";

const ZigzagAnimation = () => {
  const boxes = Array.from({ length: 4 });
  return (
    <motion.div className="flex">
      {boxes.map((_, index) => (
        <motion.div
          animate={{ y: [0, -150, 0] }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
            repeat: Infinity,
            delay: 0.3 * index,
          }}
          key={index}
          className="box"
        />
      ))}
    </motion.div>
  );
};

export default ZigzagAnimation;
