import { motion } from 'framer-motion'

const transition = {
	// duration: 2,
}

const fadeIn = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition },
	exit: { opacity: 0 },
}

const PageTransition = ({ children }) => {
	return (
		<motion.div
			variants={fadeIn}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			{children}
		</motion.div>
	)
}

export default PageTransition
