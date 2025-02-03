import { motion } from "framer-motion";

const GesturesAnimation = () => {
  return (
    <div>
      {/* <motion.div
        className="box"
        whileHover={{
          rotate: 60,
          scale: 1.2,
        }}
        transition={{ type: "spring", stiffness: 99, repeat: Infinity }}
      /> */}


      {/* <motion.div
        className="box"
        whileTap={{
          rotate: 100,
          scale: 0.9,
        }}
        transition={{ type: "spring", stiffness: 99 }}
      /> */}


      {/* <motion.div className="box" drag="x" transition={{ type: "spring", stiffness: 99 }}/> */}


      <motion.div
        className="box"
        drag
        dragConstraints={{
            left: -20,
            top: -20,
            right: -20,
            bottom: -20,
        }}
        transition={{ type: "spring", stiffness: 99 }}
      />
    </div>
  );
};

export default GesturesAnimation;
