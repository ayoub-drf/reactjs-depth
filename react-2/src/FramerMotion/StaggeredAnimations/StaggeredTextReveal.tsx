import {motion} from 'framer-motion'

    
const text: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur accusamus, ipsa, perspiciatis dolor atque commodi mollitia eaque rem aliquam numquam assumenda vitae neque."
const staggeredVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,

    }
}
const StaggeredTextReveal = () => {
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={{
            visible: {
                transition: {
                    staggerChildren: 0.07
                }
            }
        }}
    >
        {text.split("").map((char, index) => 
            <motion.span
            key={index}
            variants={staggeredVariants}
            className='font-extrabold text-4xl '
            >
                {char}
            </motion.span>
        )}
    </motion.div>
  )
}

export default StaggeredTextReveal