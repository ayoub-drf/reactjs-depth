import {motion, PanInfo} from 'framer-motion'
import { useState } from 'react'

const SwipeableCardAnimation = () => {
    const [isRemoved, setIsRemoved] = useState<boolean>(false)

    const handleDrag = (_: unknown, { offset }: PanInfo ) => {
        if (offset.x > 200) {
            setIsRemoved(true)
        } else if (offset.x < -200) {
            setIsRemoved(true)
        }
    }
    return (
        <motion.div
            className={`box !rounded-none ${isRemoved ? "!hidden" : ""}`}
            drag
            dragConstraints={{
                left: -200,
                right: 200,
            }}
            onDragEnd={handleDrag}

        />            
    )
}

export default SwipeableCardAnimation