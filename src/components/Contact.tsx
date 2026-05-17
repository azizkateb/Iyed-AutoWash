import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6"
            >
              {t.contact.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-sm sm:text-base mb-10 leading-7 max-w-full sm:max-w-xl"
            >
              {t.contact.subtitle}
            </motion.p>

            <div className="flex flex-col gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/50">{t.contact.phone.label}</p>
                  <p className="text-xl font-bold text-white">{t.contact.phone.value}</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/50">{t.contact.location.label}</p>
                  <p className="text-xl font-bold text-white">{t.contact.location.value}</p>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100/80 dark:bg-white/10 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-950 dark:text-white transition-all duration-300 hover:bg-[#25D366] dark:hover:bg-[#25D366] hover:text-white hover:shadow-[0_0_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100/80 dark:bg-white/10 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-950 dark:text-white transition-all duration-300 hover:bg-[#1877F2] dark:hover:bg-[#1877F2] hover:text-white hover:shadow-[0_0_20px_rgba(24,119,242,0.35)] hover:-translate-y-0.5">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100/80 dark:bg-white/10 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-950 dark:text-white transition-all duration-300 hover:bg-gradient-to-br dark:hover:bg-gradient-to-br hover:from-[#feda75] hover:via-[#d62976] hover:to-[#962fbf] hover:text-white hover:shadow-[0_0_20px_rgba(214,41,118,0.35)] hover:-translate-y-0.5">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100/80 dark:bg-white/10 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-950 dark:text-white transition-all duration-300 hover:bg-gradient-to-br dark:hover:bg-gradient-to-br hover:from-[#69C9D0] hover:via-[#000000] hover:to-[#EE1D52] hover:text-white hover:-translate-y-[3px] hover:scale-[1.08] hover:drop-shadow-[0_0_10px_rgba(230,45,88,0.45)]">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/80">{t.contact.form.name}</label>
                  <Input placeholder={t.contact.form.namePlaceholder} className="bg-black/20 border-white/10 text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/80">{t.contact.form.phone}</label>
                  <Input placeholder={t.contact.form.phonePlaceholder} className="bg-black/20 border-white/10 text-white" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/80">{t.contact.form.car}</label>
                <Input placeholder={t.contact.form.carPlaceholder} className="bg-black/20 border-white/10 text-white" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/80">{t.contact.form.service}</label>
                <Select>
                  <SelectTrigger className="bg-black/20 border-white/10 text-white">
                    <SelectValue placeholder={t.contact.form.servicePlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a2e] border-white/10 text-white">
                    {t.contact.form.serviceOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/80">{t.contact.form.message}</label>
                <Textarea placeholder={t.contact.form.messagePlaceholder} className="bg-black/20 border-white/10 text-white min-h-[120px]" />
              </div>

              <Button size="lg" className="w-full mt-4 py-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="w-4 h-4 mr-2" />
                {t.contact.form.submit}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
