import { useRef } from "react";
import { motion,useScroll,useSpring,useTransform } from "motion/react";
export default function Products() {
  const headerRef = useRef(null);
  const { scrollYProgress: progressHeader } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });
  const opacityHeader = useTransform(progressHeader, [0.3, 0.5], [0, 1]);
  const rawY1 = useTransform(progressHeader, [0, 1], ["0vh", "15vh"]);
  const yHeader = useSpring(rawY1, { stiffness: 60, damping: 20 });
  return (
    <div className="w-full h-screen flex justify-center items-start bg-slate-400">
      <motion.h1
        style={{ y: yHeader, opacity: opacityHeader }}
        ref={headerRef}
        className="text-xl sm:text-4xl "
      >
        Products
      </motion.h1>
    </div>
  );
}
