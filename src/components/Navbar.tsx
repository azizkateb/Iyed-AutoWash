import { useState, useEffect } from "react";
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
        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
      {/* Language Toggle */}
      <button
        data-testid="button-language-toggle"
        onClick={() => setLang(lang === "en" ? "ar" : "en")}
        className="h-9 px-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
        aria-label="Toggle language"
      >
        <Globe className="w-3.5 h-3.5" />
        {lang === "en" ? "AR" : "EN"}
      </button>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 ${isRTL ? "right-0 left-0" : "left-0 right-0"} z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group rounded-[28px] bg-white/10 border border-white/15 p-3 hover:bg-white/15 transition-all duration-300"
          >
            <img
              src={logoImg}
              alt="IYED AUTOWASH"
              className="h-20 w-20 rounded-[28px] object-cover shadow-[0_20px_50px_rgba(15,23,42,0.22)]"
            />
            <span className="text-lg font-semibold tracking-tight text-white">
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
          <div className="md:hidden flex items-center gap-2">
            {controlButtons}
            <button className="text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/5 p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-white p-2" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => { setIsMobileMenuOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            {t.nav.bookNow}
          </Button>
        </div>
      )}
    </nav>
  );
}
