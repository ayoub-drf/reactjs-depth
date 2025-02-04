import {motion} from 'framer-motion'

const imagesGallery: string[] = [
    "https://plus.unsplash.com/premium_photo-1683120683514-265c11aa0567?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683134688629-882fe7edd8f5?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683134131796-f43c28b76358?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683129729547-642cce750dd6?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const staggeredVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}
const StaggeredImageGallery = () => {
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={staggeredVariants}
        className='flex'
        > 
            {imagesGallery.map((elem, index) => 
                <motion.img
                    src={elem}
                    alt={`Image ${index}`}
                    key={index}
                    className='object-cover w-33 h-auto ml-3'
                />
            )}
        </motion.div>
    )
}

export default StaggeredImageGallery