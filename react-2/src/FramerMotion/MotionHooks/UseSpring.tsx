import { motion, useMotionValue, useSpring } from "framer-motion"
import { ChangeEvent } from "react";

const UseSpring = () => {
    const scale = useMotionValue(1)
    const smooth = useSpring(scale, {stiffness: 50, damping: 1})


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        scale.set(parseFloat(e.currentTarget.value))

    }


    return (
        <div >

            <motion.div className="box" style={{ scale: smooth }} />

            <input className="mt-[10rem] " defaultValue={2} min={0} step={0.5} max={5} type="range" onChange={handleChange} name="" id="" />
        </div>
    )
}


export default UseSpring