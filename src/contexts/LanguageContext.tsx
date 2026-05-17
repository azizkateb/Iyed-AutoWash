import { createContext, useContext, useState, ReactNode } from "react";

const translations = {
  en: {
    nav: {
      services: "Services", whyUs: "Why Us", gallery: "Gallery",
      testimonials: "Testimonials", contact: "Contact", bookNow: "Book Now",
    },
    hero: {
      badge: "Premium Detailing Center",
      headline1: "Premium Car Wash Station",
      headline2: "Luxury Station Experience",
      sub: "Visit our luxury car wash station for professional detailing and washing services in a premium automotive facility.",
      bookNow: "Book Now", ourServices: "Our Services", scroll: "Scroll",
      stats: {
        clients: { value: "500+", label: "Happy Clients" },
        experience: { value: "3+ Years", label: "Experience" },
        satisfaction: { value: "100%", label: "Satisfaction" },
      },
    },
    services: {
      overline: "What We Do", title: "Premium Auto Detailing",
      subtitle: "We use the highest quality products and techniques to ensure your vehicle looks its absolute best.",
      items: [
        { title: "Exterior Car Wash", description: "Premium hand wash using pH-neutral foam and spot-free water rinse for a perfect shine." },
        { title: "Interior Deep Cleaning", description: "Comprehensive vacuuming, steam cleaning, and leather conditioning for a fresh cabin." },
        { title: "Car Polishing", description: "Multi-stage machine polishing to remove swirls, scratches, and restore deep gloss." },
        { title: "Full Detailing", description: "The ultimate package: complete interior and exterior restoration to showroom condition." },
        { title: "Ceramic Protection", description: "Long-lasting nanoceramic coating to protect your paint from UV rays and contaminants." },
        { title: "Express Wash", description: "Fast, efficient, and high-quality exterior wash and interior vacuum for busy schedules." },
      ],
    },
    whyUs: {
      overline: "Why Choose Us", title: "The New Standard of Car Care",
      subtitle: "Experience luxury in our premium station. Combining advanced techniques with exceptional on-site service.",
      items: [
        { title: "Luxury Station Experience", desc: "Visit our premium station for an immaculate car care experience with no compromise on quality." },
        { title: "Eco-Friendly Products", desc: "Premium, biodegradable cleaning solutions that are safe for your car and the environment." },
        { title: "Professional Equipment", desc: "Our station uses professional-grade equipment and controlled facility systems to ensure a perfect finish." },
        { title: "Fast & Reliable", desc: "Punctual service with efficient workflows to get you back on the road quickly." },
        { title: "Affordable Pricing", desc: "Luxury service without the luxury price tag. Transparent pricing with no hidden fees." },
        { title: "100% Satisfaction", desc: "We don't leave until you're completely satisfied with the results." },
      ],
    },
    beforeAfter: { title: "See The Transformation", before: "BEFORE", after: "AFTER", drag: "Drag to compare" },
    testimonials: {
      title: "Client Experiences",
      items: [
        { name: "Alex Thompson", initials: "AT", location: "Downtown", text: "Incredible facility! The station staff made my 5-year-old car look brand new. The ceramic coating and premium wash are totally worth it.", rating: 5 },
        { name: "Sarah Chen", initials: "SC", location: "Westside", text: "I love the premium station setup. Scheduling was easy, the team was punctual, and the interior detailing was flawless.", rating: 5 },
        { name: "Michael Rodriguez", initials: "MR", location: "North Hills", text: "The best detailing center I've used. Professional equipment, polite staff, and the results speak for themselves.", rating: 5 },
        { name: "Emma Davis", initials: "ED", location: "South Park", text: "Visiting the luxury station is a game changer. The express wash is perfect for my busy schedule.", rating: 5 },
      ],
    },
    contact: {
      title: "Book Your Premium Wash",
      subtitle: "Ready to experience the ultimate in premium car care at our station? Fill out the form or contact us directly.",
      phone: { label: "Call or WhatsApp", value: "+216 20 890 320" },
      location: { label: "Our Location", value: "Visit our premium station in the heart of the city." },
      form: {
        name: "Name", namePlaceholder: "John Doe",
        phone: "Phone Number", phonePlaceholder: "+216...",
        car: "Car Make & Model", carPlaceholder: "e.g. BMW 3 Series",
        service: "Service Type", servicePlaceholder: "Select a service",
        serviceOptions: [
          { value: "express", label: "Express Wash" }, { value: "exterior", label: "Exterior Detail" },
          { value: "interior", label: "Interior Deep Clean" }, { value: "full", label: "Full Detailing" },
          { value: "ceramic", label: "Ceramic Coating" },
        ],
        message: "Message (Optional)", messagePlaceholder: "Any specific requirements?",
        submit: "Book Your Wash",
      },
    },
    locationSection: {
      title: "Visit Our Location",
      subtitle: "Come visit Iyed AutoWash – Professional Car Care Station in Gafsa",
      description: "Experience premium detailing and car care at our luxury station. Find us in the heart of Gafsa for a polished, modern service environment built for quality and convenience.",
    },
    footer: {
      copyright: "Iyed Autowash. All rights reserved.",
      privacy: "Privacy Policy", terms: "Terms of Service",
      links: { services: "Services", whyUs: "Why Us", gallery: "Gallery", contact: "Contact" },
    },
  },
  ar: {
    nav: {
      services: "الخدمات", whyUs: "لماذا نحن", gallery: "المعرض",
      testimonials: "آراء العملاء", contact: "اتصل بنا", bookNow: "احجز الآن",
    },
    hero: {
      badge: "مركز تلميع فاخر",
      headline1: "محطة غسيل سيارات فاخرة",
      headline2: "تجربة المحطة المميزة",
      sub: "قم بزيارة مركز غسيل السيارات الفاخر لدينا لخدمات التلميع والغسيل الاحترافية في منشأة حديثة.",
      bookNow: "احجز الآن", ourServices: "خدماتنا", scroll: "تمرير",
      stats: {
        clients: { value: "+500", label: "عميل سعيد" },
        experience: { value: "+3 سنوات", label: "خبرة" },
        satisfaction: { value: "100%", label: "رضا تام" },
      },
    },
    services: {
      overline: "ما نقدمه", title: "تلميع احترافي للسيارات",
      subtitle: "نستخدم أجود المنتجات وأحدث التقنيات لضمان أن تبدو سيارتك في أفضل حالاتها.",
      items: [
        { title: "غسيل خارجي", description: "غسيل يدوي فاخر برغوة متوازنة الحموضة وشطف خالٍ من البقع لمظهر مثالي." },
        { title: "تنظيف داخلي عميق", description: "شفط شامل وتنظيف بالبخار وتغذية الجلد لمقصورة منعشة تماماً." },
        { title: "تلميع السيارة", description: "تلميع آلي متعدد المراحل لإزالة الخدوش واستعادة البريق العميق." },
        { title: "تفصيل كامل", description: "الباقة الشاملة: استعادة كاملة للداخل والخارج إلى حالة صالة العرض." },
        { title: "حماية سيراميك", description: "طلاء نانو سيراميك طويل الأمد لحماية طلاء سيارتك من الأشعة والملوثات." },
        { title: "غسيل سريع", description: "غسيل خارجي سريع وفعال وعالي الجودة مع شفط داخلي للجداول المزدحمة." },
      ],
    },
    whyUs: {
      overline: "لماذا تختارنا", title: "المعيار الجديد للعناية بالسيارات",
      subtitle: "اكتشف تجربة التلميع الفاخرة في مركزنا المميز. نجمع بين التقنيات المتقدمة والخدمة العملية في الموقع.",
      items: [
        { title: "تجربة محطة فاخرة", desc: "قم بزيارة مركزنا الفاخر للحصول على تجربة عناية بالسيارة لا مثيل لها وبدون تنازل عن الجودة." },
        { title: "منتجات صديقة للبيئة", desc: "محاليل تنظيف فاخرة قابلة للتحلل الحيوي وآمنة لسيارتك والبيئة." },
        { title: "معدات احترافية", desc: "يستخدم مركزنا معدات احترافية وأنظمة منشأة متحكَّم بها لضمان نتيجة مثالية." },
        { title: "سريع وموثوق", desc: "خدمة دقيقة في المواعيد بسير عمل فعّال لإعادتك إلى الطريق بسرعة." },
        { title: "أسعار معقولة", desc: "خدمة فاخرة بسعر مناسب. تسعير شفاف بدون رسوم خفية." },
        { title: "رضا 100%", desc: "لن نغادر حتى تكون راضياً تماماً عن النتائج." },
      ],
    },
    beforeAfter: { title: "شاهد التحول", before: "قبل", after: "بعد", drag: "اسحب للمقارنة" },
    testimonials: {
      title: "تجارب عملائنا",
      items: [
        { name: "أحمد بن علي", initials: "أح", location: "وسط المدينة", text: "منشأة رائعة! جعلوا سيارتي التي مضى عليها 5 سنوات تبدو كالجديدة. طلاء السيراميك والغسيل الفاخر يستحقان تماماً.", rating: 5 },
        { name: "فاطمة الزهراء", initials: "فز", location: "الجانب الغربي", text: "أحب التصميم الراقي للمحطة. الحجز كان سهلاً، والفريق كان دقيقاً في الموعد، والاهتمام بالتفاصيل الداخلية كان لا تشوبه شائبة.", rating: 5 },
        { name: "كريم بوسعيد", initials: "كب", location: "الشمال", text: "أفضل مركز تلميع استخدمته. معدات احترافية، طاقم مهذب، والنتائج تتكلم عن نفسها.", rating: 5 },
        { name: "سارة مزيان", initials: "سم", location: "الجنوب", text: "زيارة المحطة الفاخرة تغير قواعد اللعبة. الغسيل السريع مثالي لجدولي المزدحم.", rating: 5 },
      ],
    },
    contact: {
      title: "احجز غسيلك الفاخر",
      subtitle: "هل أنت مستعد لتجربة أقصى درجات العناية بسيارتك في مركزنا؟ املأ النموذج أو تواصل معنا مباشرة.",
      phone: { label: "اتصل أو واتساب", value: "+216 320 890 20" },
      location: { label: "موقعنا", value: "قم بزيارة مركزنا الفاخر في قلب المدينة." },
      form: {
        name: "الاسم", namePlaceholder: "محمد أحمد",
        phone: "رقم الهاتف", phonePlaceholder: "+216...",
        car: "ماركة وطراز السيارة", carPlaceholder: "مثال: بي إم دبليو الفئة 3",
        service: "نوع الخدمة", servicePlaceholder: "اختر خدمة",
        serviceOptions: [
          { value: "express", label: "غسيل سريع" }, { value: "exterior", label: "تلميع خارجي" },
          { value: "interior", label: "تنظيف داخلي عميق" }, { value: "full", label: "تفصيل كامل" },
          { value: "ceramic", label: "طلاء سيراميك" },
        ],
        message: "الرسالة (اختياري)", messagePlaceholder: "أي متطلبات خاصة؟",
        submit: "احجز غسيلك",
      },
    },
    locationSection: {
      title: "قم بزيارة موقعنا",
      subtitle: "قم بزيارة Iyed AutoWash – محطة العناية بالسيارات الاحترافية في قفصة",
      description: "اكتشف تلميع السيارات الفاخر والعناية الاحترافية في مركزنا. نحن في قلب قفصة مع بيئة خدمة مصممة للجودة والراحة.",
    },
    footer: {
      copyright: "إياد أوتوواش. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية", terms: "شروط الخدمة",
      links: { services: "الخدمات", whyUs: "لماذا نحن", gallery: "المعرض", contact: "اتصل بنا" },
    },
  },
} as const;

export type Lang = "en" | "ar";
export type Translations = typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const isRTL = lang === "ar";
  const t = translations[lang] as Translations;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
