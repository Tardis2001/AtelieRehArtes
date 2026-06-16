import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const { scrollYProgress: progressSection1 } = useScroll({
    target: section1Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progressSection2 } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: progressSection3 } = useScroll({
    target: section3Ref,
    offset: ["start end", "end start"],
  });

  const opacitySection1 = useTransform(progressSection1, [0.4, 0.5], [0, 1]);
  const opacitySection2 = useTransform(progressSection2, [0.2, 0.5], [0, 1]);
  const opacitySection3 = useTransform(progressSection3, [0.2, 0.5], [0, 1]);

  const rawY1 = useTransform(
    progressSection1,
    [0.2, 0.4, 0.5, 0.8],
    ["0vh", "80vh", "80vh", "200vh"],
  );
  const rawX2 = useTransform(progressSection2, [0, 0.25], ["100vw", "0vw"]);
  const rawX3 = useTransform(progressSection3, [0, 0.25], ["-100vw", "0vw"]);

  const ySection1 = useSpring(rawY1, { stiffness: 60, damping: 20 });
  const xSection2 = useSpring(rawX2, { stiffness: 60, damping: 20 });
  const xSection3 = useSpring(rawX3, { stiffness: 60, damping: 20 });

  return (
    <section
      id="home"
      className="w-full flex justify-center items-center flex-col"
    >
      <div
        ref={section1Ref}
        className="bg-slate-900 bg-[url('/Hero.jpeg')] bg-cover bg-no-repeat w-full h-[150vh] flex justify-center items-center overflow-hidden"
      >
        <div className="bg-black/30 backdrop-blur-sm w-full h-full ">
          <motion.p
            style={{ y: ySection1, opacity: opacitySection1 }}
            className="will-change-transform font-dela-gothic text-center text-white text-lg sm:text-4xl"
          >
            ATELIE REH ARTES
          </motion.p>
        </div>
      </div>

      <div
        ref={section2Ref}
        className="bg-slate-300 py-10 w-full h-full flex justify-end items-center overflow-hidden"
      >
        <motion.div
          style={{ x: xSection2, opacity: opacitySection2 }}
          className="will-change-transform flex flex-col sm:flex-row w-full justify-end items-center"
        >
          <img
            src="https://placehold.co/400x400"
           className="w-[70%] sm:w-[50%] aspect-square m-8 rounded-3xl object-cover"
          />
          <p className="font-dela-gothic text-center sm:text-right w-[90%] sm:w-[40%] sm:mr-[10%] sm:text-2xl text-sm text-slate-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            eos obcaecati architecto facere non molestias soluta odit! Nam non,
            praesentium necessitatibus enim tempora dolorem mollitia magni
            itaque iusto, quis delectus.
          </p>
        </motion.div>
      </div>

      <div
        ref={section3Ref}
        className="bg-slate-300 py-10 w-full h-full flex justify-start items-center overflow-hidden"
      >
        <motion.div
          style={{ x: xSection3, opacity: opacitySection3 }}
          className="will-change-transform flex flex-col-reverse sm:flex-row w-full justify-start  items-center" 
        >
          <p className=" font-dela-gothic text-center sm:text-left w-[90%] sm:w-[40%] sm:ml-[10%] sm:text-2xl text-sm text-slate-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            eos obcaecati architecto facere non molestias soluta odit! Nam non,
            praesentium necessitatibus enim tempora dolorem mollitia magni
            itaque iusto, quis delectus.
          </p>
          <img
            src="https://placehold.co/400x400"
            className="w-[70%] sm:w-[50%] aspect-square m-8 rounded-3xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
