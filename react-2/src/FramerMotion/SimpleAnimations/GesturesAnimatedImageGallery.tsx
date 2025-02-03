import { motion } from "framer-motion";

type ImageType = {
  src: string;
  caption: string;
};

const images: ImageType[] = [
  {
    src: "https://plus.unsplash.com/premium_photo-1683120683514-265c11aa0567?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Image 1",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1683134688629-882fe7edd8f5?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Image 1",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1683134131796-f43c28b76358?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Image 1",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1683129729547-642cce750dd6?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Image 1",
  },
];

const GesturesAnimatedImageGallery = () => {
  return (
    <div className="w-[100%] flex justify-center items-center">
      {images.map((image, index) => (
        <motion.div
            whileHover={{
                scale: 1.1,
            }}
          className="relative m-4 overflow-hidden rounded-lg
                shadow-lg"
          key={index}
        >
          <img src={image.src} alt={image.caption} />

          <motion.div
            whileHover={{
                opacity: 1
            }}
            className="absolute inset-0 flex justify-center items-center
                    bg-black text-white opacity-0 hover:opacity-100
                    cursor-pointer duration-100 transition-opacity"
          >
            {image.caption}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default GesturesAnimatedImageGallery;
