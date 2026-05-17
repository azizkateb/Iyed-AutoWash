import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Star, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury car"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.15),transparent_50%)]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00d4ff]/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-16">
        <div className={`flex items-center gap-12 ${isRTL ? "flex-row-reverse" : "flex-row"}`}>

          {/* Text Content */}
          <div className={`flex-1 min-w-0 ${isRTL ? "text-right" : "text-left"}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-white/80">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`font-display font-bold text-white mb-5 leading-[1.15] ${
                isRTL
                  ? "text-4xl md:text-5xl lg:text-6xl"
                  : "text-5xl md:text-7xl lg:text-7xl"
              }`}
            >
              {t.hero.headline1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00d4ff]">
                {t.hero.headline2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-white/60 mb-10 max-w-xl leading-relaxed"
            >
              {t.hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`flex flex-col sm:flex-row items-start gap-4 mb-14 ${isRTL ? "sm:flex-row-reverse" : ""}`}
            >
              <Button
                size="lg"
                data-testid="button-book-now-hero"
                className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(0,102,255,0.4)] hover:shadow-[0_0_50px_rgba(0,102,255,0.6)] transition-all"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.bookNow}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg h-14 px-8 bg-white/5 border-white/10 text-white hover:bg-white/10"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.ourServices}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={`grid grid-cols-3 gap-4 border-t border-white/10 pt-8 max-w-xl ${isRTL ? "text-right" : "text-left"}`}
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

          {/* Floating Image — only on desktop, switches side based on language */}
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

      {/* Scroll indicator */}
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
