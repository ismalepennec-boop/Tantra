import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ericImage from "@assets/eric hamac_1762991693170.jpeg";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Heart,
      title: t("features.wounded"),
    },
    {
      icon: Users,
      title: t("features.relationship"),
    },
    {
      icon: BookOpen,
      title: t("features.knowledge"),
    },
    {
      icon: Sparkles,
      title: t("features.body"),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 
          className="font-serif text-3xl md:text-4xl text-center text-primary mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("features.title")}
        </motion.h2>

        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="relative max-w-2xl w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={ericImage}
              alt="Relaxation dans un hamac sur une plage paradisiaque"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-testid="img-hammock"
            />
          </motion.div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover-elevate h-full" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6 flex gap-4">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t("features.footer")}
        </motion.p>
      </div>
    </section>
  );
}
