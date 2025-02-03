import {motion} from 'framer-motion'
import { useState } from 'react'

const LongPressChangeSize = () => {
    const [isLarge, setIsLarge] = useState<boolean>(false)
    return (
        <motion.div 
        onTapStart={() => setIsLarge(true)}
        onTapCancel={() => setIsLarge(false)}
        onTap={() => setIsLarge(!isLarge)}
        transition={{ duration:1 }}
        className={`box transition-all ${isLarge ? "!w-53 !h-53" : ""}`}
        >

        </motion.div>
    )
}

export default LongPressChangeSize