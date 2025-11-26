import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function CouplesSection() {
  const { t } = useLanguage();
  
  const chakrasVideoUrl = "/api/assets/chakras-video";
  
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 
          className="font-serif text-3xl md:text-4xl text-center text-primary mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("couples.title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="hover-elevate h-full" data-testid="card-love">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-serif text-2xl text-foreground">{t("couples.love.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("couples.love.desc")}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center items-center">
            <motion.div 
              className="relative w-full max-w-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full blur-2xl"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <video
                  src={chakrasVideoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-lg drop-shadow-2xl"
                  data-testid="video-chakras"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="hover-elevate h-full" data-testid="card-connect">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-serif text-2xl text-foreground">{t("couples.connect.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("couples.connect.desc")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
