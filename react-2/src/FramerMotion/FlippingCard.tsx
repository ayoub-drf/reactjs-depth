import { motion } from 'framer-motion'
import { useState } from 'react'

const FlippingCard = () => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    return (
        <motion.div 
            onClick={() => setIsFlipped(!isFlipped)} 
            className="perspective-1000 w-73 h-73"
        >
            <motion.div 
                style={{ transformStyle: "preserve-3d" }}
                variants={{
                    front: {rotateY: 0},
                    back: {rotateY: 180},
                }}
                initial="front"
                animate={isFlipped ? "back" : "front"}
                transition={{ duration: 0.8 }}
                className='relative w-full h-full text-center '
            >
                <div className="bg-red-600 flex justify-center items-center inset-0 absolute w-full h-full backface-hidden">
                    Front Side
                </div>

                <div className="bg-blue-600 rotate-y-180 flex justify-center items-center inset-0 absolute w-full h-full backface-hidden">
                    Back Side
                </div>

            </motion.div>
        </motion.div>
    )
}

export default FlippingCard;
