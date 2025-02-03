import { motion} from 'framer-motion'
import { useState } from 'react'

const FadeOutAnimation = () => {
    const [isOpen, setIsOpen] = useState<null | number>(null)
    const handleIndex = (index: number) => {
        setIsOpen(index == isOpen ? null : index)

        console.log(
            isOpen
        )
    }
    return (
        <div className='text-[#2196F3] font-bold '>
            {[...Array(4)].map((_, index) =>
                <motion.div 
                    className='bg-white min-w-66 text-black mb-2 p-4 rounded font-bold '
                    key={index}
                >
                    <button onClick={() => handleIndex(index)}>click me</button>
                    <p className='p-1 mb-2'>{index}</p>
                    <hr />
                    <motion.div 
                        initial={{ display: "none" }}
                        transition={{ duration: 0.3 }}
                        animate={{ display: index == isOpen ? "block" : "none"}}
                    >
                        hello I am div with the index of {index}
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default FadeOutAnimation