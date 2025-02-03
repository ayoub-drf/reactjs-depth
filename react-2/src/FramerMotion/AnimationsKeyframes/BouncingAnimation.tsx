import { motion } from 'framer-motion'

const BouncingAnimation = () => {


    return (
        <motion.div
        className='box !rounded-none'
        animate={{ y: [0, -200, 0], backgroundColor: ["#ffffff", "#2196F3", "#000000"], rotate: [0, 360, -360] }}
        transition={{ duration: 1, ease: "easeOut", repeat: Infinity }}
        >
            
        </motion.div>
    )
}

export default BouncingAnimation