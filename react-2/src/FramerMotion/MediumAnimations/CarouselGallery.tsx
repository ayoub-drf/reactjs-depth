import { motion } from "framer-motion";
import { useState } from "react";
const images: string[] = [
  "https://images.unsplash.com/photo-1516905041604-7935af78f572?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1516906571665-49af58989c4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1515704089429-fd06e6668458?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1525548002014-e18135d814d7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const CarouselGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    // # (3 - 1 + 4) % 4
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)

  };
  const selectIndex = (index: number) => {
    setCurrentIndex(index);
  };


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-3">
        {images.map((img, index) => (
          <div
            onClick={() => selectIndex(index)}
            className="flex items-center"
            key={index}
          >
            <img
              className="w-33 object-cover shadow-sm shadow-blue-500 cursor-pointer rounded-2xl"
              src={img}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>

      <div className="flex relative w-[555px] overflow-hidden items-center mt-17">
        {images.map((img, index) => (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: `${-currentIndex * 100}%` }}
            transition={{ duration: 0.3 }}
            className="flex min-w-full h-[desired-height]"
            key={index}
          >
            <img
              className=" object-cover h-[400px] w-full cursor-pointer rounded-2xl"
              src={img}
              alt={`Image ${index}`}
            />
          </motion.div>
        ))}
      <button
        onClick={prevSlide}
        className='absolute top-[50%] left-4 transform
             -translate-y-1/2 p-2 shadow transition-opacity duration-300'
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-[50%] right-4 transform 
            -translate-y-1/2 p-2 shadow transition-opacity duration-300"
      >
        &#10095;
      </button>
      </div>

    </div>
  );
};

export default CarouselGallery;
