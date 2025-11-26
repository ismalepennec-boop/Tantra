import { useLanguage } from "@/contexts/LanguageContext";
import logoImage from "@assets/tempImagefameKG 1_1762992645485.png";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <img
              src={logoImage}
              alt="Tantra Intuitions by Rigdzin"
              className="h-16 w-auto"
              data-testid="img-footer-logo"
            />
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tantra Intuitions Rigdzin. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
