import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div>
      <motion.div className="bg-white fixed inset-0 h-3">
        <motion.div
          style={{ width: lineWidth, transition: "width 0.3 ease" }}
          className="bg-red-700 w-4 h-full"
        />
      </motion.div>
      {[...Array(100)].map((_, i) => (
        <p className="text-white font-bold mb-3" key={i}>
          Lorem ipsum dolor sit amet, consectetur 
        </p>
      ))}
    </div>
  );
};

export default ScrollIndicator;
