import { motion, useTransform, useScroll, useMotionValueEvent,useSpring} from "motion/react";
import { useRef } from "react";

export default function Hero() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
          
    const { scrollYProgress: progressSection1 } = useScroll({
        target: section1Ref,
        offset: ["start end", "end start"] 
    });

    const { scrollYProgress: progressSection2 } = useScroll({
        target: section2Ref,
        offset: ["start end", "end start"] 
    });

    const { scrollYProgress: progressSection3 } = useScroll({
        target: section2Ref,
        offset: ["start end", "end start"] 
    });

    const opacitySection1 = useTransform(progressSection1, [0.5, 0.54], [0, 1]);
    const opacitySection2 = useTransform(progressSection2, [0.3, 0.5], [0, 1]);
    const opacitySection3 = useTransform(progressSection3, [0.3, 0.5], [0, 1]);

    const rawY1 = useTransform(progressSection1,  [0.5,0.52], ["-100vh", "100vh"]);
    const rawX2 = useTransform(progressSection2, [0, 0.4,0.6 , 1], ["100vw", "0vw","0vw" ,"-100vw"]);
    const rawX3 = useTransform(progressSection3, [0, 0.4,0.6 , 1], ["-100vw", "0vw","0vw" ,"100vw"]);

    const ySection1 = useSpring(rawY1, { stiffness: 60, damping: 20 });
    const xSection2 = useSpring(rawX2, { stiffness: 60, damping: 20 });
    const xSection3 = useSpring(rawX3, { stiffness: 60, damping: 20 });
     
    return (
        <section id="home" className="w-full flex justify-center items-center flex-col">
            <div ref={section1Ref} className="bg-slate-900 bg-[url('/hero.png')] bg-cover w-full h-[150vh] flex justify-center items-center overflow-hidden">
                <div className="bg-black/30 backdrop-blur-sm w-full h-full ">
                <motion.p style={{ y: ySection1, opacity: opacitySection1 }} className="will-change-transform font-dela-gothic text-center text-white text-lg sm:text-4xl"> 
                    ATELIE REH ARTES
                </motion.p>
                </div>
            </div>

            <div ref={section2Ref} className="bg-slate-300 py-10 w-full h-full flex justify-end items-center overflow-hidden">
                <motion.p style={{ x: xSection2, opacity: opacitySection2 }} className="will-change-transform font-dela-gothic text-right w-[40%] mr-[10%] sm:text-2xl text-sm text-slate-800"> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eos obcaecati architecto facere non molestias soluta odit! Nam non, praesentium necessitatibus enim tempora dolorem mollitia magni itaque iusto, quis delectus.
                </motion.p>
            </div>
    
            <div ref={section3Ref} className="bg-slate-300 py-10 w-full h-full flex justify-start items-center overflow-hidden">
                <motion.p style={{ x: xSection3, opacity: opacitySection3 }} className="will-change-transform font-dela-gothic text-left w-[40%] ml-[10%] sm:text-2xl text-sm text-slate-800"> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eos obcaecati architecto facere non molestias soluta odit! Nam non, praesentium necessitatibus enim tempora dolorem mollitia magni itaque iusto, quis delectus.
                </motion.p>
            </div>        
        </section>
    );
}
