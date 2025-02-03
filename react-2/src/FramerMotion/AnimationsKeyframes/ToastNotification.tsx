import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ToastNotification = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const showToast = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  };
  return (
    <div>
      <AnimatePresence>
        <motion.div
          animate={{ y: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          exit={{ y: -100, opacity: 0 }}
          className="toast fixed bg-white text-black font-bold
        p-4 rounded top-5 right-8  "
        >
          I am a toast notification
        </motion.div>
      </AnimatePresence>
      <button
        onClick={() => showToast()}
        className="button bg-[#2196F3] font-bold px-4 py-2 text-white rounded-xl cursor-pointer "
      >
        {isOpen ? "Close Notification" : "Show Notification"}
      </button>
    </div>
  );
};

export default ToastNotification;
