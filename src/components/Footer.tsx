import { useLanguage } from "@/contexts/LanguageContext";

const logoImg = `${import.meta.env.BASE_URL}iyedLogo.jpg`;

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer-section bg-black py-10 sm:py-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <img
              src={logoImg}
              alt="IYED AUTOWASH"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-3xl object-cover shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
            />
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white">
              IYED<span className="text-primary">AUTOWASH</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-white/50">
            <a href="#services" className="hover:text-white transition-colors">{t.footer.links.services}</a>
            <a href="#why-us" className="hover:text-white transition-colors">{t.footer.links.whyUs}</a>
            <a href="#gallery" className="hover:text-white transition-colors">{t.footer.links.gallery}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.footer.links.contact}</a>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p className="text-center sm:text-left w-full sm:w-auto">&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 w-full sm:w-auto">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
