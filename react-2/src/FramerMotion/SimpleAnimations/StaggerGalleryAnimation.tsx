import { motion } from "framer-motion"
import { useState } from "react";


const imagesGallery: string[] = [
    "https://plus.unsplash.com/premium_photo-1683120683514-265c11aa0567?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683134688629-882fe7edd8f5?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683134131796-f43c28b76358?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683129729547-642cce750dd6?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const parentVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.6,
            staggerDirection: 1
        }
    },
}

const childVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
}

const StaggerGalleryAnimation = () => {
    const [showImages, setShowImages] = useState<boolean>(false)
    return (
        <div>
            <button onClick={() => setShowImages((prev) => !prev)} className="bg-[#2196F3] text-white px-4 py-2 
            rounded-lg shadow-lg shadow-red-500 cursor-pointer mb-4" >
                {showImages ? "Hide Images" : "Show Images"}
            </button>

            <motion.div 
                className="flex"
                variants={parentVariants}
                initial="hidden"
                animate={showImages ? "visible" : "hidden"}
            >
                {imagesGallery.map((image, index) => 
                    <motion.div key={index} variants={childVariants}>
                        <img className="object-cover w-66" src={image} alt={"Image " + (index + 1)} />
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default StaggerGalleryAnimation