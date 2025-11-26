import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles, Heart, Brain, Mountain, Palette, Trophy } from "lucide-react";

export default function ParcoursSection() {
  const { t } = useLanguage();

  const journeyItems = [
    { key: "commerce", icon: Briefcase },
    { key: "burnout", icon: Mountain },
    { key: "hypnose", icon: Brain },
    { key: "teacher", icon: Sparkles },
    { key: "festival", icon: Heart },
    { key: "artist", icon: Palette },
    { key: "polo", icon: Trophy },
    { key: "tantrika", icon: Heart },
    { key: "traveller", icon: Mountain },
  ];

  const influences = [
    { key: "nonduality", color: "from-primary/20 to-accent/20" },
    { key: "saints", color: "from-accent/20 to-primary/20" },
    { key: "hypnosis", color: "from-primary/20 to-accent/20" },
    { key: "therapy", color: "from-accent/20 to-primary/20" },
    { key: "tantra", color: "from-primary/20 to-accent/20" },
    { key: "spiritual", color: "from-accent/20 to-primary/20" },
    { key: "body", color: "from-primary/20 to-accent/20" },
    { key: "desert", color: "from-accent/20 to-primary/20" },
    { key: "sport", color: "from-primary/20 to-accent/20" },
    { key: "art", color: "from-accent/20 to-primary/20" },
  ];

  return (
    <section id="parcours" className="py-20 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            {t("parcours.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("parcours.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden" data-testid="card-education">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">
                  {t("parcours.education.title")}
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-foreground leading-relaxed">
                  {t("parcours.education.audencia")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("parcours.education.languages")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("parcours.education.dfs")}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            className="font-serif text-3xl text-center text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("parcours.journey.title")}
          </motion.h3>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8">
              {journeyItems.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.key}
                    className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    data-testid={`journey-item-${item.key}`}
                  >
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="hover-elevate">
                        <CardContent className="p-6">
                          <p className="text-foreground leading-relaxed">
                            {t(`parcours.journey.${item.key}`)}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 relative z-10">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-3xl text-primary mb-4">
              {t("parcours.influences.title")}
            </h3>
            <p className="text-muted-foreground text-lg italic">
              Une cartographie de mes rencontres et formations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {influences.map((influence, index) => (
              <motion.div
                key={influence.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                data-testid={`influence-card-${influence.key}`}
              >
                <Card className={`h-full hover-elevate overflow-hidden`}>
                  <div className={`h-2 bg-gradient-to-r ${influence.color}`} />
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-primary border-primary">
                        {t(`parcours.influences.${influence.key}`)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`parcours.influences.${influence.key}.desc`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 text-accent">
            <Sparkles className="w-5 h-5" />
            <p className="font-serif text-xl">
              +33 6 60 40 46 00 • rigdzin@wanadoo.fr
            </p>
            <Sparkles className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
