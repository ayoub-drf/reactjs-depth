import {motion} from 'framer-motion'

const StaggeredItemsList = () => {
    return (
        <motion.ul>
            {Array.from({ length: 4 }).map((_, index) => 
                <motion.li 
                    key={index}
                    initial={{
                        opacity: 0, x: -60
                    }}
                    animate={{
                        opacity: 1, x: 0
                    }}
                    transition={{
                        duration: 1, delay: 0.3 * index
                    }}
                    className='bg-red-600 w-30 h-10 mb-2 '
                />
            )}
        </motion.ul>
    )
}

export default StaggeredItemsList