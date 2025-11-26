import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImage from "@assets/tempImagefameKG 1_1762992645485.png";
import { motion } from "framer-motion";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t("nav.livre"), href: "#livre" },
    { name: t("nav.retraites"), href: "#retraites" },
    { name: t("nav.coaching"), href: "#coaching" },
    { name: t("nav.peintre"), href: "#peintre" },
    { name: t("nav.sculpteur"), href: "#sculpteur" },
    { name: t("nav.parcours"), href: "/parcours" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#1A1045]/95 border-b border-[#D4A257]/10" style={{ backgroundColor: 'rgba(26, 16, 69, 0.95)' }}>
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <motion.div 
              className="hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={logoImage}
                alt="Tantra Intuitions by Rigdzin"
                className="h-20 w-auto"
                data-testid="img-logo"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#D4A257] hover:text-[#E5B668] transition-colors"
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
              <Button
                variant={language === "fr" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setLanguage("fr")}
                className={`h-7 px-3 rounded-full text-xs ${
                  language === "fr" 
                    ? "bg-[#D4A257] text-[#3A2452] hover:bg-[#E5B668]" 
                    : "text-[#D4A257] hover:bg-white/10"
                }`}
                data-testid="button-language-fr"
              >
                FR
              </Button>
              <Button
                variant={language === "en" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={`h-7 px-3 rounded-full text-xs ${
                  language === "en" 
                    ? "bg-[#D4A257] text-[#3A2452] hover:bg-[#E5B668]" 
                    : "text-[#D4A257] hover:bg-white/10"
                }`}
                data-testid="button-language-en"
              >
                EN
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#D4A257] hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#D4A257] hover:bg-white/10 hover:text-[#E5B668]"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
