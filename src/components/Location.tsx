import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Location() {
  const { t } = useLanguage();
  return (
    <section id="location" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.14),transparent_40%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/10 bg-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] backdrop-blur-2xl shadow-[0_40px_120px_-48px_rgba(14,165,233,0.35)] overflow-hidden"
        >
          <div className="px-6 py-10 md:px-12 md:py-12 lg:px-16 lg:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80 mb-4">
                {t.locationSection.title}
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                {t.locationSection.subtitle}
              </h2>
              <p className="text-base text-slate-300 max-w-2xl leading-8">
                {t.locationSection.description}
              </p>
            </div>
          </div>

          <div className="group transition-transform duration-300 hover:-translate-y-1">
            <div className="mx-6 mb-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.55)] transition-all duration-300">
              <div className="relative overflow-hidden">
                <iframe
                  title="Iyed AutoWash Location"
                  src="https://www.google.com/maps?q=CQHG%2BXHP+Iyed+AutoWash,+Rue+Gandhi,+Gafsa&output=embed"
                  loading="lazy"
                  className="h-[350px] w-full min-h-[350px] border-0 bg-slate-950"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
