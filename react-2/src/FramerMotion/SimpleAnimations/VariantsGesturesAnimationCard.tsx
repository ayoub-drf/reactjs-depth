import { motion } from 'framer-motion'

const VariantsGesturesAnimationCard = () => {
    const VariantsAttributes = {
        click: {
            scale: 0.4,
            rotate: -15,
            transition: {duration: 0.3},
            backgroundColor: "green"
        },
        initial: {
            scale: 1,
            rotate: 0,
            skew: 0,
            transition: {duration: 0.3},
            backgroundColor: "red"

        },
        hover: {
            scale: 1.15,
            rotate: 15,
            skew: "10deg",
            transition: {duration: 0.3},
            backgroundColor: "yellow"

        }
    }
    return (
        <div className='w-48 h-48 text-black flex justify-center items-center'>
            <motion.div 
                className='w-full h-full'
                variants={VariantsAttributes}
                initial='initial'
                whileHover={"hover"}
                whileTap={"click"}
            />
        </div>
    )
}

export default VariantsGesturesAnimationCard