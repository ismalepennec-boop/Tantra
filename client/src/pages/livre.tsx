import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Sparkles } from "lucide-react";
import bookCover from "@assets/tempImageuohr1B 1_1762992817743.png";

export default function Livre() {
  const { language } = useLanguage();

  const summaryFr = {
    title: "Extrait : De l'extase au silence",
    intro: "Découvrez un extrait captivant de « Jamais sans ma liberté », un voyage tantrique autour du monde où Jigmé Rigdzin partage son expérience profonde de la sexualité sacrée et de l'éveil spirituel.",
    sections: [
      {
        title: "Le multi-orgasme et l'extase",
        content: "Hannah découvre une capacité orgasmique infinie, où chaque instant peut devenir source de jouissance. Au-delà du simple plaisir physique, elle apprend à guider son énergie vers les chakras supérieurs, transformant l'orgasme en portail vers l'extase."
      },
      {
        title: "La montée de Kundalini",
        content: "Lorsque l'énergie sexuelle est consciemment dirigée vers le chakra couronne, la kundalini s'éveille. Ce n'est plus seulement une fusion des corps, mais une connexion au sacré, où le couple devient un vecteur énergétique entre ciel et terre."
      },
      {
        title: "L'état de silence ultime",
        content: "Au-delà de l'extase se trouve un état de paix absolue - le Nirvana. Par la cessation volontaire du mouvement au moment du désir orgasmique, l'énergie se diffuse dans l'univers. Vide, silence, paix. Un avec le TOUT."
      },
      {
        title: "La voie tantrique moderne",
        content: "Cette forme de sexualité sacrée est accessible à tous les couples sous certaines conditions : la femme doit se sentir en sécurité, l'homme doit honorer sa part féminine, et tous deux doivent accepter des rapports sexuels très longs, où la rétention séminale devient un art."
      },
      {
        title: "Une transformation radicale",
        content: "Avec la pratique, le système nerveux se transforme. L'homme gagne en contrôle, en durée, en conscience. L'orgasme cesse d'être un réflexe involontaire pour devenir un choix conscient, une célébration de la vie et de l'amour."
      }
    ],
    epilogue: "L'épilogue explore l'histoire de la sexualité humaine, les traumatismes collectifs et propose une voie de guérison par le tantra - une sexualité où l'orgasme n'est qu'un passage nécessaire vers la libération du mental et la paix profonde."
  };

  const summaryEn = {
    title: "Excerpt: From Ecstasy to Silence",
    intro: "Discover a captivating excerpt from 'Never Without My Freedom', a tantric journey around the world where Jigmé Rigdzin shares his profound experience of sacred sexuality and spiritual awakening.",
    sections: [
      {
        title: "Multi-orgasm and Ecstasy",
        content: "Hannah discovers an infinite orgasmic capacity, where every moment can become a source of bliss. Beyond simple physical pleasure, she learns to guide her energy toward the upper chakras, transforming orgasm into a portal to ecstasy."
      },
      {
        title: "Kundalini Rising",
        content: "When sexual energy is consciously directed toward the crown chakra, kundalini awakens. It's no longer just a fusion of bodies, but a connection to the sacred, where the couple becomes an energetic vector between heaven and earth."
      },
      {
        title: "The Ultimate State of Silence",
        content: "Beyond ecstasy lies a state of absolute peace - Nirvana. Through voluntary cessation of movement at the moment of orgasmic desire, energy diffuses into the universe. Emptiness, silence, peace. One with the ALL."
      },
      {
        title: "The Modern Tantric Path",
        content: "This form of sacred sexuality is accessible to all couples under certain conditions: the woman must feel safe, the man must honor his feminine part, and both must accept very long sexual encounters, where seminal retention becomes an art."
      },
      {
        title: "A Radical Transformation",
        content: "With practice, the nervous system transforms. The man gains control, duration, consciousness. Orgasm ceases to be an involuntary reflex to become a conscious choice, a celebration of life and love."
      }
    ],
    epilogue: "The epilogue explores the history of human sexuality, collective traumas and proposes a path of healing through tantra - a sexuality where orgasm is only a necessary passage toward mental liberation and deep peace."
  };

  const summary = language === "fr" ? summaryFr : summaryEn;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />
      
      <main className="flex-1 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <motion.img
                src={bookCover}
                alt="Jamais sans ma liberté"
                className="w-48 rounded-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">
              {language === "fr" ? "Jamais sans ma liberté" : "Never Without My Freedom"}
            </h1>
            <p className="text-xl text-accent italic">
              {language === "fr" 
                ? "Un voyage tantrique autour du monde" 
                : "A tantric journey around the world"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h2 className="font-serif text-3xl text-foreground">
                    {summary.title}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {summary.intro}
                </p>
              </div>
            </Card>
          </motion.div>

          <div className="space-y-6 mb-12">
            {summary.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Sparkles className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl text-primary mb-3">
                          {section.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="overflow-hidden mb-8">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-primary mb-4">
                  {language === "fr" ? "Épilogue" : "Epilogue"}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {summary.epilogue}
                </p>
                
                <div className="border-t border-border pt-6">
                  <p className="text-center text-muted-foreground mb-6 italic">
                    {language === "fr" 
                      ? "Téléchargez l'extrait complet pour découvrir l'intégralité de ce chapitre captivant"
                      : "Download the full excerpt to discover this captivating chapter in its entirety"}
                  </p>
                  <a href="/api/assets/livre-extrait/download" download>
                    <Button 
                      className="w-full gap-2" 
                      size="lg"
                      data-testid="button-download-excerpt"
                    >
                      <Download className="w-5 h-5" />
                      {language === "fr" 
                        ? "Télécharger l'extrait complet (PDF)" 
                        : "Download full excerpt (PDF)"}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-muted-foreground mb-4">
              {language === "fr" 
                ? "Pour commander le livre complet ou en savoir plus"
                : "To order the complete book or learn more"}
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
