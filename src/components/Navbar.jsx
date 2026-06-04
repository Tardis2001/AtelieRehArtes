import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const NAV_LINKS = [
    { name: "Principal", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Contatos", href: "#contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="sm:text-xl hover:scale-110 transition-transform duration-500 text-sm font-bold tracking-wider font-lato cursor-pointer">
          ATELIE REH ARTES
        </div>

          <ul className="hidden md:flex items-center sm:gap-5">
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={link.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.1 }}
              >
     
                <a
                  href={link.href}
                  className="font-lato sm:text-lg z-10 m-2 block transition-all duration-500 text-slate-300 hover:text-white hover:text-shadow-lg/45 text-shadow-blue-400"
                
                >
                  {link.name}
                </a>
                  {hoveredIndex === index && (
                    <motion.span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 right-0 h-px bg-white mx-auto"
                        initial={{ opacity: 0,width:"0%"}}
                        animate={{ opacity: 1, width:"100%"}}
                        exit={{ opacity: 0,width:"0%"}}
                        transition={{ type: "spring", stiffness: 250, damping: 30 }}
                    />
                   )}
              </motion.li>
            ))}
          </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 relative z-50 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white block rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block rounded-full"
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1 } },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="flex flex-col px-6 py-4 gap-4"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.name}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
