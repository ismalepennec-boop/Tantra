import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, Users, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function BookSeminarSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [surpriseEmail, setSurpriseEmail] = useState("");
  const [surpriseName, setSurpriseName] = useState("");

  const surpriseMutation = useMutation({
    mutationFn: async (data: { name: string; email: string }) => {
      return await apiRequest("POST", "/api/surprise-2026", data);
    },
    onSuccess: () => {
      toast({
        title: "✨ Inscription réussie !",
        description: "Merci pour votre intérêt. Vous serez informé(e) de la surprise 2026.",
      });
      setSurpriseName("");
      setSurpriseEmail("");
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const handleSurpriseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = surpriseName.trim();
    const trimmedEmail = surpriseEmail.trim();
    
    if (!trimmedName || !trimmedEmail) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }
    
    surpriseMutation.mutate({ name: trimmedName, email: trimmedEmail });
  };

  return (
    <section className="py-16 md:py-20" id="livre">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="hover-elevate h-full" data-testid="card-book">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="flex-grow space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Book className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">{t("book.title")}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {t("book.desc")}
                </p>
              </div>

              <a 
                href="https://www.amazon.fr/Jamais-sans-libert%C3%A9-voyage-tantrique/dp/B0FVH8QX5K/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3F1KGBMM0B58K&dib=eyJ2IjoiMSJ9.TZqYU3rARwLcN6PpSyNXuw.3znWRnZ3nNcnnhGF8SlggtEn0xA4vWffuR1o_04aseQ&dib_tag=se&keywords=tantra+jamais+sans+ma+libert%C3%A9&qid=1761694317&sprefix=tantra+jamais+sans+ma+libert%C3%A9+%2Caps%2C110&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                <Button
                  className="w-full rounded-full"
                  size="lg"
                  data-testid="button-order-book"
                >
                  {t("book.btn")}
                </Button>
              </a>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="hover-elevate h-full" data-testid="card-seminars">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="flex-grow space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">{t("seminars.title")}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {t("seminars.desc")}
                </p>

                <p className="text-sm text-muted-foreground italic">
                  {t("seminars.note")}
                </p>
              </div>

              <Button
                variant="outline"
                className="w-full rounded-full mt-6"
                size="lg"
                data-testid="button-newsletter"
              >
                {t("seminars.btn")}
              </Button>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="hover-elevate h-full bg-gradient-to-br from-primary/5 to-primary/10" data-testid="card-surprise">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="flex-grow space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">{t("surprise.title")}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {t("surprise.desc")}
                </p>
              </div>

              <form onSubmit={handleSurpriseSubmit} className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder={t("surprise.name")}
                    value={surpriseName}
                    onChange={(e) => setSurpriseName(e.target.value)}
                    required
                    className="rounded-full"
                    data-testid="input-surprise-name"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder={t("surprise.email")}
                    value={surpriseEmail}
                    onChange={(e) => setSurpriseEmail(e.target.value)}
                    required
                    className="rounded-full"
                    data-testid="input-surprise-email"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full"
                  size="lg"
                  disabled={surpriseMutation.isPending}
                  data-testid="button-surprise-submit"
                >
                  {surpriseMutation.isPending ? "Envoi en cours..." : t("surprise.btn")}
                </Button>
              </form>
            </CardContent>
          </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
