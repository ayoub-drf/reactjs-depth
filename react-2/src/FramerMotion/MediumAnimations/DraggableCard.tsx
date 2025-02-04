import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

interface DraggableCardProps {
  children: ReactNode;
  style: CSSProperties;
}

const DraggableCard = ({ children, style }: DraggableCardProps) => {
  return (
    <motion.div
      className="w-40 h-60 rounded-2xl font-bold shadow-blue-700 shadow-2xl flex justify-center items-center"
      style={style}
      drag
      dragConstraints={{
          bottom: 200,
          top: -200,
          right: 200,
          left: -200
      }}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      transition={{
        duration: 0.6
      }}
    >
      {children}
    </motion.div>
  );
};

export default DraggableCard;
