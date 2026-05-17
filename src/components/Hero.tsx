import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Star, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="hero-section relative min-h-[calc(100vh-5rem)] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-0">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury car"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_45%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.1),transparent_55%)]" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-1/3 left-10 w-[360px] h-[360px] bg-primary/15 rounded-full blur-[90px]"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="hidden lg:block absolute bottom-8 right-10 w-[420px] h-[420px] bg-[#00d4ff]/08 rounded-full blur-[110px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.9fr] items-center gap-10 lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-5 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-white/80">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`font-display font-bold text-white mb-6 ${
                isRTL
                  ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  : "text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
              } leading-tight max-w-full sm:max-w-2xl`}
            >
              <span className="block max-w-full sm:max-w-[30rem]">
                {t.hero.headline1}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00d4ff]">
                  {t.hero.headline2}
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-white/60 mb-8 max-w-full sm:max-w-xl leading-8"
            >
              {t.hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`flex flex-col gap-3 mb-10 ${isRTL ? "items-end" : "items-start"}`}
            >
              <Button
                size="lg"
                data-testid="button-book-now-hero"
                className="w-full sm:w-auto text-base sm:text-lg h-11 sm:h-12 px-5 sm:px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_24px_rgba(0,102,255,0.35)] hover:shadow-[0_0_40px_rgba(0,102,255,0.5)] transition-all"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.bookNow}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base sm:text-lg h-11 sm:h-12 px-5 sm:px-8 bg-white/5 border-white/10 text-white hover:bg-white/10"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.ourServices}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 max-w-xl ${isRTL ? "text-right" : "text-left"}`}
            >
              <div className="flex flex-col gap-1">
                <div className={`flex items-center gap-2 text-2xl md:text-3xl font-display font-bold text-white ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                  <Star className="w-5 h-5 text-primary shrink-0" fill="currentColor" />
                  <span>{t.hero.stats.clients.value}</span>
                </div>
                <span className="text-xs md:text-sm text-white/50">{t.hero.stats.clients.label}</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className={`flex items-center gap-2 text-2xl md:text-3xl font-display font-bold text-white ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span>{t.hero.stats.experience.value}</span>
                </div>
                <span className="text-xs md:text-sm text-white/50">{t.hero.stats.experience.label}</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className={`flex items-center gap-2 text-2xl md:text-3xl font-display font-bold text-white ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                  <Shield className="w-5 h-5 text-primary shrink-0" />
                  <span>{t.hero.stats.satisfaction.value}</span>
                </div>
                <span className="text-xs md:text-sm text-white/50">{t.hero.stats.satisfaction.label}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block shrink-0 w-[360px] xl:w-[420px] h-[480px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80"
              alt="Car wash foam"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 uppercase tracking-widest">{t.hero.scroll}</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
