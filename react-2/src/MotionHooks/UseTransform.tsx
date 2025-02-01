import { motion, useMotionValue, useTransform } from 'framer-motion'

const UseTransform = () => {
    const x = useMotionValue(0)
    const backgroundColor = useTransform(x, [0, 100], ["#FF0000", "#FFA500"])
    return (
        <motion.div drag="x" style={{x, backgroundColor}} className="box" />
    )
}

export default UseTransform