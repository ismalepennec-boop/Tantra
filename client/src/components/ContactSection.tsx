import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-muted/30" id="contact">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <a 
                href="mailto:rigdzin@wanadoo.fr" 
                className="text-lg font-medium text-foreground hover-elevate px-4 py-2 rounded-md transition-colors"
                data-testid="link-contact-email"
              >
                rigdzin@wanadoo.fr
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <a 
                href="tel:+33660404600" 
                className="text-lg font-medium text-foreground hover-elevate px-4 py-2 rounded-md transition-colors"
                data-testid="link-contact-phone"
              >
                06.60.40.46.00
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Card className="border-0 shadow-xl bg-card/50 backdrop-blur" data-testid="card-contact">
            <CardContent className="p-4 md:p-8">
              <div className="bg-background rounded-lg overflow-hidden">
                <iframe
                  src="https://forms.fillout.com/t/o89AAG4QkBus"
                  className="w-full h-[700px] border-0"
                  data-testid="iframe-contact-form"
                  title="Formulaire de contact"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
