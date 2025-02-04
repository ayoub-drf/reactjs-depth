import {motion, useSpring} from 'framer-motion'

const ButtonHoverScale = () => {
    // const scale = useMotionValue(1)
    const scale = useSpring(1)
    return (
        <motion.div>
            <motion.div 
                className='box'
                onHoverStart={() => scale.set(2)}
                onHoverEnd={() => scale.set(1)}
                transition={{ duration: 1 }}
                style={{ scale }}
            />
               
        </motion.div>
    )
}

export default ButtonHoverScale