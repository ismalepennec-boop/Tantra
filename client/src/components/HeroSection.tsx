import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import bookCover from "@assets/tempImageuohr1B 1_1762992817743.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("hero.title")}
              </motion.h1>
              <motion.p 
                className="font-serif text-xl md:text-2xl text-primary/80 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("hero.subtitle")}
              </motion.p>
            </div>

            <motion.p 
              className="text-lg text-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="/livre">
                <Button
                  size="lg"
                  className="rounded-full text-base px-8"
                  data-testid="button-discover-book"
                >
                  {t("hero.btn.discover")}
                </Button>
              </Link>
              <a href="/api/assets/livre-extrait/download" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-base px-8"
                  data-testid="button-download-chapter"
                >
                  {t("hero.btn.download")}
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img
                src={bookCover}
                alt="Jamais sans ma liberté - Jigme Rigdzin"
                className="relative w-full max-w-md rounded-lg shadow-2xl"
                data-testid="img-book-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
