import { motion, PanInfo} from "framer-motion";
import { useState } from "react";
const imagesGallery: string[] = [
  "https://plus.unsplash.com/premium_photo-1683120683514-265c11aa0567?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683134688629-882fe7edd8f5?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683134131796-f43c28b76358?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683129729547-642cce750dd6?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const GesturesAnimationBaseGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSwipe = (_: unknown, { offset }: PanInfo) => {
      if(offset.y > 100) {
        setCurrentIndex((prev) => ((prev - 1) + imagesGallery.length) % imagesGallery.length )
    }
    else if (offset.y < -100) {
        setCurrentIndex((prev) => (prev + 1) % imagesGallery.length)
    }
  }
  return (
    <div>
        <motion.img
        key={currentIndex}
        className="w-44"
        drag="y"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={handleSwipe}
            src={imagesGallery[currentIndex]}
        />
    </div>
  );
};

export default GesturesAnimationBaseGallery;
