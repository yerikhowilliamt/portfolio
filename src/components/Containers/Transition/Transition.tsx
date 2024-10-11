"use client"

import {motion} from "framer-motion";
import { usePathname } from "next/navigation";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%"
  },
  animate: {
    x: "0%",
    width: "0%"
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"]
  }
}
const Transition = () => {
  const router = usePathname();
  return (
    <div key={router}>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 dark:bg-black bg-white" variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{delay: 0.2,  duration: 0.9, ease: "easeInOut"}}></motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 dark:bg-white bg-black" variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{delay: 0.4,  duration: 0.9, ease: "easeInOut"}}></motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-0 bg-neutral-500" variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{delay: 0.6,  duration: 0.9, ease: "easeInOut"}}></motion.div>
    </div>
  )
}

export default Transition