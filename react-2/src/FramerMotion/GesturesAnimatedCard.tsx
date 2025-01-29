import { motion } from "framer-motion";

const GesturesAnimatedCard = () => {
  return (
    <motion.div
        initial={{
            scale: 1, rotate: 0
        }}
        transition={{
            type: "spring", stiffness: 221
        }}
        whileHover={{
            scale: 1.1, rotate: 23
        }}
        whileTap={{
            scale: 0.6, rotate: -23
        }}
        drag
        dragConstraints={{
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }}
        dragElastic={1}

      className="max-w-sm mx-auto cursor-pointer overflow-hidden
        shadow-lg bg-white"
    >
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Image"
      />

      <div className="p-4">
        <h2 className="text-[#2196F3] mb-2 ">Card title</h2>
        <p className="text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
        </p>

        <button className="mt-4 bg-[#2196F3] text-white font-semibold py-2
        px-4 ">Learn More</button>
      </div>
    </motion.div>
  );
};

export default GesturesAnimatedCard;
