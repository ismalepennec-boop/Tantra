import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Brain } from "lucide-react";

export default function Parcours() {
  const { t, language } = useLanguage();

  const cvPdfUrl = "/api/assets/cv";
  const mindmapPdfUrl = "/api/assets/mindmap";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />
      
      <main className="flex-1 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">
              {t("parcours.title")}
            </h1>
            <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
              {language === "fr" 
                ? "Un voyage de transformation et d'éveil" 
                : "A journey of transformation and awakening"}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full overflow-hidden hover-elevate" data-testid="card-cv">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-2xl text-foreground">
                        {language === "fr" ? "Curriculum Vitae" : "Curriculum Vitae"}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {language === "fr" 
                          ? "Découvrez mon parcours professionnel et personnel"
                          : "Discover my professional and personal journey"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6 mb-8">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "Diplômé d'Audencia École de Management"
                          : "Graduate of Audencia School of Management"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "Commerce international sur 4 continents"
                          : "International trade on 4 continents"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "Praticien en hypnose ericksonienne"
                          : "Ericksonian hypnosis practitioner"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "Artiste plasticien depuis 1996"
                          : "Visual artist since 1996"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "3 fois Champion de France de Polo"
                          : "3 times French Polo Champion"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "Tantrika depuis 1998"
                          : "Tantrika since 1998"}</span>
                      </li>
                    </ul>
                  </div>
                  <a href="/api/assets/cv/download" download>
                    <Button 
                      className="w-full gap-2" 
                      size="lg"
                      data-testid="button-download-cv"
                    >
                      <Download className="w-5 h-5" />
                      {language === "fr" ? "Télécharger le CV" : "Download CV"}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full overflow-hidden hover-elevate" data-testid="card-mindmap">
                <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Brain className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-2xl text-foreground">
                        {language === "fr" 
                          ? "Carte Mentale des Thérapies" 
                          : "Therapy Mind Map"}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {language === "fr" 
                          ? "Explorez mes formations et influences"
                          : "Explore my trainings and influences"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6 mb-8">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "Non-Dualité : Jean Klein, Eric Baret..."
                          : "Non-Duality: Jean Klein, Eric Baret..."}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "Saints & Maîtres : Sai Baba, Amma, Dalai Lama"
                          : "Saints & Masters: Sai Baba, Amma, Dalai Lama"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "Hypnose & PNL : Milton Erickson, Avatar"
                          : "Hypnosis & NLP: Milton Erickson, Avatar"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "Tantra : Margot Anand, OSHO, Tamera"
                          : "Tantra: Margot Anand, OSHO, Tamera"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "Corps & Énergie : Mantak Chia, Tai Chi"
                          : "Body & Energy: Mantak Chia, Tai Chi"}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{language === "fr" 
                          ? "Déserts & Nature : Andes à cheval, stages"
                          : "Deserts & Nature: Andes on horseback, stages"}</span>
                      </li>
                    </ul>
                  </div>
                  <a href="/api/assets/mindmap/download" download>
                    <Button 
                      className="w-full gap-2" 
                      size="lg"
                      variant="secondary"
                      data-testid="button-download-mindmap"
                    >
                      <Download className="w-5 h-5" />
                      {language === "fr" ? "Télécharger la Mind Map" : "Download Mind Map"}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-muted-foreground mb-4">
              {language === "fr" 
                ? "Pour toute question ou accompagnement personnalisé"
                : "For any question or personalized support"}
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 text-accent font-medium">
              <a href="tel:+33660404600" className="hover:text-accent/80 transition-colors">
                +33 6 60 40 46 00
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="mailto:rigdzin@wanadoo.fr" className="hover:text-accent/80 transition-colors">
                rigdzin@wanadoo.fr
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
