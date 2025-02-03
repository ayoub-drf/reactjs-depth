import { motion, useMotionValue, useMotionValueEvent } from "framer-motion"
import { ChangeEvent } from "react";

const UseMotionValue1 = () => {
    const scale = useMotionValue(1)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        scale.set(parseFloat(e.currentTarget.value))

    }


    useMotionValueEvent(scale, "change", (latest) => {
        console.log("Animation changed", latest)
    });
    return (
        <div >

            <motion.div className="box" style={{ scale }} />

            <input className="mt-[10rem] " defaultValue={2} min={0} step={0.5} max={5} type="range" onChange={handleChange} name="" id="" />
        </div>
    )
}

export default UseMotionValue1