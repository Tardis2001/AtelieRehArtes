import { useRef } from "react";
import { motion,useScroll,useSpring,useTransform } from "motion/react";
export default function Products() {
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const { scrollYProgress: progressHeader } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });
  const opacityHeader = useTransform(progressHeader, [0.3, 0.5], [0, 1]);
  const rawY1 = useTransform(progressHeader, [0, 1], ["-30vh", "-10vh"]);
  const yHeader = useSpring(rawY1, { stiffness: 60, damping: 20 });

  const { scrollYProgress: progressCards } = useScroll({
    target: cardsContainerRef,
    offset: ["start 80%", "end center"], 
  });
  const opacityCard1 = useTransform(progressCards, [0, 0.3], [0, 1]);
  const rawCardY1 = useTransform(progressCards, [0, 0.3], [50, 0]);
  const yCard1 = useSpring(rawCardY1, { stiffness: 100, damping: 20 })

  const opacityCard2 = useTransform(progressCards, [0.25, 0.55], [0, 1]);
  const rawCardY2 = useTransform(progressCards, [0.25, 0.55], [50, 0]);
  const yCard2 = useSpring(rawCardY2, { stiffness: 100, damping: 20 })

  const opacityCard3 = useTransform(progressCards, [0.5, 0.8], [0, 1]);
  const rawCardY3 = useTransform(progressCards, [0.5, 0.8], [50, 0]); 
  const yCard3 = useSpring(rawCardY3, { stiffness: 100, damping: 20 })

  return (
    <div id="services" className="w-full h-[120vh] flex flex-col justify-center items-center bg-slate-400">
      <motion.h1
        style={{ y: yHeader, opacity: opacityHeader }}
        ref={headerRef}
        className="text-xl sm:text-4xl top-0 "
      >
        Serviços
      </motion.h1>
<div 
        ref={cardsContainerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4"
      >
        <motion.div
          style={{ opacity: opacityCard1, y: yCard1 }}
          className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-2"
        >
          <h2 className="text-xl font-semibold text-slate-800">Produto 1</h2>
          <p className="text-slate-600">Aparece primeiro durante o scroll.</p>
        </motion.div>

        <motion.div
          style={{ opacity: opacityCard2, y: yCard2 }}
          className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-2"
        >
          <h2 className="text-xl font-semibold text-slate-800">Produto 2</h2>
          <p className="text-slate-600">Aparece em seguida.</p>
        </motion.div>

        <motion.div
          style={{ opacity: opacityCard3, y: yCard3 }}
          className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-2"
        >
          <h2 className="text-xl font-semibold text-slate-800">Produto 3</h2>
          <p className="text-slate-600">O último a surgir conforme você desce.</p>
        </motion.div>
      </div>
    </div>
  );
}
