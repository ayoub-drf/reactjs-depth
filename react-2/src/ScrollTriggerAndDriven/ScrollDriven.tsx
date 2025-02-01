import { motion, useScroll, useTransform } from 'framer-motion'

const ScrollDriven = () => {
    const { scrollYProgress } = useScroll()

    const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])


    return (
        <motion.div style={{ width }} className='fixed h-3 bg-red-700 inset-0'/>
            
    )
}

export default ScrollDriven