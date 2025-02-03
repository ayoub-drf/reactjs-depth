import {motion} from 'framer-motion'
import { useState } from 'react'

const AnimationsVariants = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const variantsParams = {
        hidden: {opacity: 0, x: "-100%"},
        visible: {opacity: 1, x: 0},
        exit: {opacity: 0, x: "-100%"},
    }
    return (
        <div className='flex items-start'>
            <motion.div 
            initial="hidden"
            exit="exit"
            animate={isOpen ? "visible" : "hidden"}
            variants={variantsParams}
            transition={{duration: 1}}
            className="nav bg-white h-screen w-44 text-black
            p-3 inset-0    ">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </motion.div>
            <button
            onClick={() => setIsOpen(!isOpen)}
            className='bg-blue-400 cursor-pointer text-white p-3 '
            >Show Navbar</button>
        </div>
    )
}

export default AnimationsVariants