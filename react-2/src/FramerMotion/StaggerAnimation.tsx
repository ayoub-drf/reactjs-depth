import { motion } from "framer-motion"


const parentVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8,
            duration: 1,

        }
    }
};

const childVariants = {
    hidden: {opacity: 0, y: 10},
    visible: {opacity: 1, y: 0},
}


const StaggerAnimation = () => {
    return (
        <motion.div 
            variants={parentVariants} 
            initial="hidden"
            animate={"visible"}
        >

            {[...Array(4)].map((_, index) => 
                <motion.div 
                    key={index} 
                    className="box" 
                    variants={childVariants}
                />

            )}

        </motion.div>
    )
}

export default StaggerAnimation