import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function BeforeAfter() {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [useMotion, setUseMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setUseMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }
    
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  return (
    <section id="gallery" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            {t.beforeAfter.title}
          </motion.h2>
        </div>

        <motion.div 
          ref={containerRef}
          style={useMotion ? { y, touchAction: "pan-y" } : { touchAction: "pan-y" }}
          className="relative max-w-full mx-auto aspect-4/3 sm:aspect-4/3 md:aspect-video min-h-65 sm:min-h-75 rounded-2xl overflow-hidden border border-white/10"
          onMouseMove={handleDrag}
          onTouchMove={handleDrag}
        >
          {/* After Image (Background) — clean polished car */}
          <div className="absolute inset-0">
            <img
              src="cleanCar.png"
              alt="After - clean car"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/95 text-slate-950 border border-slate-200/80 backdrop-blur-md px-4 py-1.5 rounded-full dark:bg-black/60 dark:text-white dark:border-white/20">
              <span className="text-sm font-bold text-slate-950 dark:text-white select-none tracking-wider">{t.beforeAfter.after}</span>
            </div>
          </div>

          {/* Before Image (Clipped) — dirty dusty car */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="dirtyCar.png"
              alt="Before - dirty car"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/95 text-slate-950 border border-slate-200/80 backdrop-blur-md px-4 py-1.5 rounded-full dark:bg-black/60 dark:text-white dark:border-white/20">
              <span className="text-sm font-bold text-slate-950 dark:text-white select-none tracking-wider">{t.beforeAfter.before}</span>
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="flex gap-1 sm:gap-2">
                <div className="w-1 h-3 sm:h-4 bg-primary rounded-full" />
                <div className="w-1 h-3 sm:h-4 bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="text-center mt-6 text-slate-500 dark:text-white/50 text-sm">
          {t.beforeAfter.drag}
        </div>
      </div>
    </section>
  );
}
