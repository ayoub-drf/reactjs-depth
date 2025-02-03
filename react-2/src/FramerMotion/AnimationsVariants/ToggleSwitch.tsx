import {motion} from 'framer-motion'
import { useState } from 'react'

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false)
    
    return (
        <div>
            <motion.button
            className='bg-blue-600 relative w-20 h-10 rounded cursor-pointer flex justify-center items-center font-bold '
            onClick={() => setIsOn(!isOn)}
            > 
            <motion.div 
            variants={
                {
                    off: {x: -20},
                    on: {x: 20}
                }
            }
            initial="off"
            animate={isOn ? "on" : "off"}
            className="h-6 w-6 absolute bg-white rounded-xl"
            />
            </motion.button>
        </div>
    )
}

export default ToggleSwitch