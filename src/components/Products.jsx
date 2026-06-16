import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
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
  const yCard1 = useSpring(rawCardY1, { stiffness: 100, damping: 20 });

  const opacityCard2 = useTransform(progressCards, [0.25, 0.55], [0, 1]);
  const rawCardY2 = useTransform(progressCards, [0.25, 0.55], [50, 0]);
  const yCard2 = useSpring(rawCardY2, { stiffness: 100, damping: 20 });

  const opacityCard3 = useTransform(progressCards, [0.5, 0.75], [0, 1]);
  const rawCardY3 = useTransform(progressCards, [0.5, 0.75], [50, 0]);
  const yCard3 = useSpring(rawCardY3, { stiffness: 100, damping: 20 });
  const [isTooltipHovered, setIsTooltipHovered] = useState(false);

  return (
    <div
      id="services"
      className="w-full h-[120vh] flex flex-col justify-center items-center bg-slate-400"
    >
      <motion.h1
        style={{ y: yHeader, opacity: opacityHeader }}
        ref={headerRef}
        className="font-dela-gothic text-xl sm:text-4xl top-0 "
      >
        Serviços
      </motion.h1>
      <div
        ref={cardsContainerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4"
      >
        <motion.div
          style={{ opacity: opacityCard1, y: yCard1 }}
          className="rounded-xl shadow-xl flex flex-col"
        >
          <motion.div
            layout
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`product-card w-full rounded-md shadow-xl overflow-hidden z-100 relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 group ${isTooltipHovered ? "w-[120%] max-w-2xl" : "w-full"}`}
          >
            <div className="uppercase text-center leading-none z-40">
              <p className="font-semibold text-xl uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                  Kits Sob Medida
                </p>
            </div>
            <div className="w-full aspect-square relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#7b956a] after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300">
              <img
                src="KitEloah.jpg"
                className="w-auto aspect-square rounded-3xl object-cover"
              />
              <div
                onMouseEnter={() => setIsTooltipHovered(true)}
                onMouseLeave={() => setIsTooltipHovered(false)}
                className="absolute top-0 left-0 -translate-x-[150%] p-2 flex flex-col items-start gap-10 transition-all duration-300 group-hover:-translate-x-full"
              >
      
                <ul className="flex flex-col items-start gap-2">
                  <li className="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                    <svg
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={3}
                      className="stroke-[#495c48]"
                      stroke="#000000"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={10}
                      width={10}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <p className="text-xs font-semibold text-[#495c48]">
                      Produtos de Qualidade
                    </p>
                  </li>
                  <li className="inline-flex gap-2 items-center justify-center group-hover:delay-300 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                    <svg
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={3}
                      className="stroke-[#495c48]"
                      stroke="#000000"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={10}
                      width={10}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <p className="text-xs font-semibold text-[#495c48]">
                      Protect Skin Barrier
                    </p>
                  </li>
                  <li className="inline-flex gap-2 items-center justify-center group-hover:delay-400 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                    <svg
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={3}
                      className="stroke-[#495c48]"
                      stroke="#000000"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={10}
                      width={10}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <p className="text-xs font-semibold text-[#495c48]">
                      Reduce Winkles
                    </p>
                  </li>
                  <li className="inline-flex gap-2 items-center justify-center group-hover:delay-500 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                    <svg
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={3}
                      className="stroke-[#495c48]"
                      stroke="#000000"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={10}
                      width={10}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <p className="text-xs font-semibold text-[#495c48]">
                      Anti Inflammatory
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
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
          <p className="text-slate-600">
            O último a surgir conforme você desce.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
