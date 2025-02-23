'use client';
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={ pathname }>
        <motion.div 
          initial= {{ opacity: 1 }}
          animate= {{ opacity: 0, transition: { delay: 1.3, duration: 0.6, ease: "easeInOut" }, }}
          className= "h-screen w-screen fixed bg-text top-0 left-0 pointer-events-none"
        />
        { children }
      </div>
    </AnimatePresence>
  )
}

export default PageTransition