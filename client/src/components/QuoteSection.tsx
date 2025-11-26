import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function QuoteSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-[#D4A257] via-primary to-[#D4A257] rounded-3xl blur-xl opacity-20"
            animate={{ 
              opacity: [0.2, 0.3, 0.2],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative bg-gradient-to-br from-[#1A1045] to-[#2B1B4D] rounded-3xl p-12 md:p-16 border border-[#D4A257]/20">
            <motion.div 
              className="absolute top-8 left-8 text-[#D4A257]/10 text-8xl font-serif leading-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >"</motion.div>
            <motion.div 
              className="absolute bottom-8 right-8 text-[#D4A257]/10 text-8xl font-serif leading-none rotate-180"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >"</motion.div>
            
            <blockquote className="space-y-8 relative">
              <motion.p 
                className="font-serif text-2xl md:text-3xl text-[#D4A257] leading-relaxed italic"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("quote.freedom1")}
              </motion.p>
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4A257] to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <motion.p 
                className="font-serif text-2xl md:text-3xl text-[#D4A257] leading-relaxed italic"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {t("quote.freedom2")}
              </motion.p>
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4A257] to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              />
              <motion.p 
                className="font-serif text-2xl md:text-3xl text-[#D4A257] leading-relaxed italic"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {t("quote.freedom3")}
              </motion.p>
            </blockquote>
          </div>
        </motion.div>

        <div className="mt-16 text-center max-w-4xl mx-auto space-y-8">
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("quote.experience")}
          </motion.p>
          <motion.div 
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="absolute -inset-2 bg-gradient-to-r from-primary to-[#D4A257] rounded-lg blur opacity-20"
              animate={{ 
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <p className="relative font-serif text-3xl md:text-4xl bg-gradient-to-r from-primary to-[#D4A257] bg-clip-text text-transparent font-bold">
              {t("quote.promise")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
