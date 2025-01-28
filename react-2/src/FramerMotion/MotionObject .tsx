import { motion } from 'framer-motion'

const MotionObject  = () => {
  return (
    <div className='flex'>
        {/* <motion.div 
            className='box'
            initial={{ x: -20 }}
            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
            animate={{ x: 200, y: -10, rotate: 10, scale: 0.7, skew: 3,   }} 
        /> */}

        {/* <motion.div 
            className='box'
            // initial={{ x: 300 }}
            animate={{ 
                scale: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                backgroundColor: ["#ff0000", "#0000ff", "#00ff00", "#ff0000", "#ff0000", "#0000ff", "#00ff00", "#ff0000"],
                borderRadius: ["100%", "10%", "60%", "100%", "10%", "60%", "100%", "10%", "60%", "100%", "10%", "60%"]                
            }}
            transition={{ duration: 2 }}
        /> */}

        {/* <motion.button
            className='bg-[#2196F3] font-extrabold text-[22px] cursor-pointer block pt-2 pb-2 pl-6 pr-6 '
            animate={{
                scale: [1, 1.1, 1]
            }}
            transition={{ duration: 0.1, repeat: Infinity }}
        >
            Click me
        </motion.button> */}
        {[...Array(3)].map((_, index) => 
            <motion.div 
                className='w-8 h-8 m-2 rounded-full bg-blue-400'
                key={index}
                animate={{
                    y: [0, -20, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: index * 0.2
                }}
            >

            </motion.div>
        )}
    </div>
  )
}

export default MotionObject 