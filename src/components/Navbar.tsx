import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const logoImg = `${import.meta.env.BASE_URL}iyedLogo.jpg`;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.whyUs, href: "#why-us" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.testimonials, href: "#testimonials" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const controlButtons = (
    <div className="flex items-center gap-2">
      {/* Theme Toggle */}
      <button
        data-testid="button-theme-toggle"
        onClick={toggleTheme}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
      {/* Language Toggle */}
      <button
        data-testid="button-language-toggle"
        onClick={() => setLang(lang === "en" ? "ar" : "en")}
        className="h-8 sm:h-9 px-2.5 sm:px-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
        aria-label="Toggle language"
      >
        <Globe className="w-3.5 h-3.5" />
        {lang === "en" ? "AR" : "EN"}
      </button>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-sm border-b border-white/10 py-3 sm:py-4 shadow-sm"
          : "bg-background/10 backdrop-blur-sm border-b border-white/10 py-3 sm:py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group rounded-[28px] bg-white/8 border border-white/15 py-2.5 px-3 sm:px-4 hover:bg-white/12 transition-all duration-300"
          >
            <img
              src={logoImg}
              alt="IYED AUTOWASH"
              className="h-10 w-10 max-[390px]:h-9 max-[390px]:w-9 sm:h-12 sm:w-12 rounded-[28px] object-cover shadow-[0_18px_40px_rgba(15,23,42,0.22)]"
            />
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white leading-tight">
              IYED<span className="text-primary">AUTOWASH</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <div className={`flex items-center ${isRTL ? "gap-4 flex-row-reverse" : "gap-6"}`}>
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            {controlButtons}
            <Button
              data-testid="button-book-now-nav"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.nav.bookNow}
            </Button>
          </div>

          {/* Mobile: controls + hamburger */}
          <div className="md:hidden flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
            {controlButtons}
            <button
              className="text-white p-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          id="mobile-navigation"
          className="md:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-3xl border-t border-white/10 p-4 sm:p-5 flex flex-col gap-3 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto rounded-b-3xl z-40"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white/80 hover:text-white rounded-2xl px-3 py-3 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
            {controlButtons}
          </div>
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.nav.bookNow}
          </Button>
        </motion.div>
      )}
    </nav>
  );
}
