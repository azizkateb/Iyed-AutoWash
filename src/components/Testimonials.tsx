import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto px-2 sm:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            {t.testimonials.title}
          </motion.h2>
        </div>
      </div>

      <div className="flex overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          className="flex gap-4 px-4 sm:px-6 shrink-0"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...t.testimonials.items, ...t.testimonials.items].map((testimonial, i) => (
            <div 
              key={i} 
              className="w-[min(88vw,320px)] shrink-0 p-5 sm:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md min-w-65"
            >
              <div className="flex items-center gap-2 mb-5">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-primary" fill="currentColor" />
                ))}
              </div>
              <p className="text-white/80 text-base sm:text-lg mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/20 text-white font-bold">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/50">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
