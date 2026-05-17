import { useLanguage } from "@/contexts/LanguageContext";

const logoImg = `${import.meta.env.BASE_URL}iyedLogo.jpg`;

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer-section bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="IYED AUTOWASH"
              className="h-14 w-14 rounded-3xl object-cover shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
            />
            <span className="font-display font-bold text-xl tracking-tight text-white">
              IYED<span className="text-primary">AUTOWASH</span>
            </span>
          </div>
          
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#services" className="hover:text-white transition-colors">{t.footer.links.services}</a>
            <a href="#why-us" className="hover:text-white transition-colors">{t.footer.links.whyUs}</a>
            <a href="#gallery" className="hover:text-white transition-colors">{t.footer.links.gallery}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.footer.links.contact}</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
