import {motion} from 'framer-motion'
import { useState } from 'react'

const ToolTip = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <button className='bg-red-500 p-3 m-0 '
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            
            >Hover me</button>
            {visible &&         
            <motion.div 
            variants={{
                hidden: {opacity: 0, y: 10},
                open: {opacity: 1, y: 0},
                exit: {opacity: 0, y: 10},
            }}
            initial="hidden"
            animate={visible ? "open" : "hidden"}
            exit="hidden"
            transition={{ duration: 0.4 }}
            className="bg-white text-black flex justify-center items-center
            px-4 py-2 m-0 rounded-1 font-bold  absolute ">
            visible
            </motion.div>
            }
        </div>
    )
}

export default ToolTip