import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    "nav.livre": "Livre",
    "nav.retraites": "Retraites",
    "nav.coaching": "Coaching",
    "nav.peintre": "Rigdzin peintre",
    "nav.sculpteur": "Rigdzin Sculpteur",
    "nav.parcours": "Mon Parcours",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "La méthode Rigdzin",
    "hero.subtitle": "Tantra, Sexualité, Non-Dualité — Pour les couples de plus de 40 ans !",
    "hero.description": "Un voyage tantrique spirituel qui allie développement personnel et éveil sensuel. La méthode Rigdzin vous accompagne vers une sexualité consciente, une connexion profonde et une liberté authentique dans votre couple.",
    "hero.btn.discover": "Découvrir le livre",
    "hero.btn.download": "Télécharger un chapitre gratuit",
    
    // Couples Section
    "couples.title": "Pour les couples reliés au sacré qui aiment le sexe & les orgasmes sans limites",
    "couples.love.title": "Vous vous aimez ?",
    "couples.love.desc": "Vous aimez la sexualité, vous voulez aller plus loin.",
    "couples.connect.title": "Vous vous reliez ?",
    "couples.connect.desc": "Vous reliez sexualité, développement personnel, explorations, sécurité.",
    
    // Quote
    "quote.freedom1": "La liberté c'est accepter ce qui est sans en être affecté.",
    "quote.freedom2": "La liberté c'est aussi le non-jugement dans la confrontation.",
    "quote.freedom3": "La liberté c'est pouvoir créer son futur pour soi et dans le couple.",
    "quote.experience": "Dans le ressenti, l'authenticité et la découverte, vivez des expériences ! Un équilibre masculin-féminin pour chacun des partenaires.",
    "quote.promise": "UNE PROMESSE : VOTRE COUPLE VA GRANDIR, RIRE ET JOUIR !",
    
    // Features
    "features.title": "Un accompagnement complet",
    "features.wounded": "Connecter vos enfants blessés et vos adultes consentants",
    "features.relationship": "Relationnel franc et décomplexé",
    "features.knowledge": "Savoir-faire et connaissances des techniques",
    "features.body": "Connaissance des corps physiques et énergétiques",
    "features.footer": "Cheminez avec moi et mon équipe, en couples ouverts ou fermés. Du livre à l'accompagnement personnalisé, trouvez la formule qui résonne avec vous — commencez seul ou à deux !",
    
    // Book & Seminars
    "book.title": "Le Livre",
    "book.desc": "Un voyage tantrique spirituel, un témoignage de résilience, un éveil intérieur, une liberté sexuelle consciente, un voyage initiatique tantrique à travers les 5 continents, un soin des blessures et l'extase sexuelle décrite.",
    "book.btn": "Commander le livre maintenant",
    "seminars.title": "Les Séminaires",
    "seminars.desc": "Pour couples. Dans un cadre sécurisant, dans un lieu magique. En 2026 : quatre fois 3 jours (sans obligation de tous les suivre) par an. Et peut-être une semaine de rêve alliant vacances, beauté et pratiques.",
    "seminars.note": "(Les dates ne sont pas encore fixées, inscrivez-vous pour recevoir une newsletter.)",
    "seminars.btn": "S'inscrire à la newsletter",
    "surprise.title": "Une surprise pour 2026",
    "surprise.desc": "Un événement exceptionnel se prépare pour 2026. Soyez parmi les premiers informés en laissant vos coordonnées.",
    "surprise.name": "Votre nom",
    "surprise.email": "Votre email",
    "surprise.btn": "Être informé(e)",
    
    // Parcours
    "parcours.title": "Mon Parcours",
    "parcours.subtitle": "Un voyage de transformation à travers 4 continents, 40 pays et d'innombrables rencontres avec le sacré",
    "parcours.education.title": "Formation",
    "parcours.education.audencia": "Diplômé d'Audencia École de Management Nantes",
    "parcours.education.languages": "Maîtrise du français, anglais, allemand et espagnol",
    "parcours.education.dfs": "DFS Diplôme de Formation Supérieur en relation d'aide et addictions, FPSHP Faculté Privée des Sciences Humaines de Paris",
    "parcours.journey.title": "Parcours Professionnel",
    "parcours.journey.commerce": "Commerce international sur 4 continents pendant 10 ans",
    "parcours.journey.burnout": "Burn out soigné par la traversée des Andes à cheval",
    "parcours.journey.hypnose": "Praticien en hypnose ericksonienne (1993-2000)",
    "parcours.journey.teacher": "Enseignant en développement personnel et spiritualité dans le désert (1995-2000)",
    "parcours.journey.festival": "Coordinateur du Festival des Musiques Sacrées de Fès, Maroc (1997-2000)",
    "parcours.journey.artist": "Artiste plasticien : photographe, peintre, sculpteur depuis 1996",
    "parcours.journey.polo": "Joueur de polo, 3 fois Champion de France et autres titres sur 3 continents",
    "parcours.journey.tantrika": "Tantrika depuis 1998",
    "parcours.journey.traveller": "Voyageur dans plus de 40 pays",
    "parcours.influences.title": "Formations & Influences",
    "parcours.influences.nonduality": "Non-Dualité",
    "parcours.influences.nonduality.desc": "Rencontres avec Jean Klein, Eric Baret, Jacques Vigne, Stephen Jourdain, Andrew Cohen, Yvan Amar",
    "parcours.influences.saints": "Saints & Maîtres",
    "parcours.influences.saints.desc": "Sathya Sai Baba, Amma, le Dalai Lama, le XIIe Gwalpang Rimpoché (qui m'a nommé Jigme Rigdzin)",
    "parcours.influences.hypnosis": "Hypnose & PNL",
    "parcours.influences.hypnosis.desc": "Milton Erickson, Watzlawick, Wittgenstein, Jane Turner, Alfred Korzybski (sémantique générale), Avatar Star Edge's Int.",
    "parcours.influences.therapy": "Thérapies & Relations d'aide",
    "parcours.influences.therapy.desc": "Rebirth avec Caroline Guidetti, Fleurs de Bach, coaching individuel et sportif, dépendances (alcool, sexe) à la Faculté de Bobigny et AA",
    "parcours.influences.tantra": "Tantra & Sexualité",
    "parcours.influences.tantra.desc": "Sky Dancing Tantra (Margot Anand), Open to Bliss (Sathyama), Tantra d'OSHO, Dark Eros (Karl di Foggia), massages tantriques (Kathia), Tamera Portugal (communauté pour la paix et liberté sexuelle), prostate et érotypes (Laura Pinson)",
    "parcours.influences.spiritual": "Spiritualité & Symbolisme",
    "parcours.influences.spiritual.desc": "Astrologie/Astronomie (Luc Bigé), Yoga Nidra (André Rielh), Évangiles (Jean-Yves Leloup), Soufisme (Faouzi Skali), Contes de Grimm (JP DeBailleuil), Terre du Ciel",
    "parcours.influences.body": "Corps & Énergie",
    "parcours.influences.body.desc": "TAO Garden avec Maître Mantak Chia (Thaïlande), Tai Chi (Catherine), Chi Qong (Anette Burnotte), Yoga, Cri Primal, Herzen Lichtkörperprozess Chakras (Sandra Conrad)",
    "parcours.influences.desert": "Déserts & Nature",
    "parcours.influences.desert.desc": "Stages thérapeutiques dans les déserts (Douz, Mhamid, Wadi Rum), randonnées en chameau, traversée des Andes à cheval (Junin de Los Andes à Ushuaia, 1990)",
    "parcours.influences.sport": "Sport de Haut Niveau",
    "parcours.influences.sport.desc": "3 fois Champion de France de Polo, Championnat du Monde 1989 (7e), coach mental équipe de France Polo 2004, commentateur sportif trilingue",
    "parcours.influences.art": "Art Plastique",
    "parcours.influences.art.desc": "Sculptures, photographies, peintures - une centaine d'expositions",
    
    // Contact
    "contact.title": "Me Contacter",
    "contact.subtitle": "Partagez vos questions, vos besoins ou votre intérêt pour un accompagnement personnalisé. Je vous répondrai avec attention et bienveillance.",
    
    // Footer
    "footer.rights": "Tous droits réservés.",
  },
  en: {
    // Header
    "nav.livre": "Book",
    "nav.retraites": "Retreats",
    "nav.coaching": "Coaching",
    "nav.peintre": "Rigdzin painter",
    "nav.sculpteur": "Rigdzin Sculptor",
    "nav.parcours": "My Journey",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "The Rigdzin Method",
    "hero.subtitle": "Tantra, Sexuality, Non-Duality — For couples over 40!",
    "hero.description": "A spiritual tantric journey that combines personal development and sensual awakening. The Rigdzin method guides you toward conscious sexuality, deep connection, and authentic freedom in your relationship.",
    "hero.btn.discover": "Discover the book",
    "hero.btn.download": "Download a free chapter",
    
    // Couples Section
    "couples.title": "For couples connected to the sacred who love sex & unlimited orgasms",
    "couples.love.title": "Do you love each other?",
    "couples.love.desc": "You love sexuality, you want to go further.",
    "couples.connect.title": "Are you connected?",
    "couples.connect.desc": "You connect sexuality, personal development, explorations, and safety.",
    
    // Quote
    "quote.freedom1": "Freedom is accepting what is without being affected by it.",
    "quote.freedom2": "Freedom is also non-judgment in confrontation.",
    "quote.freedom3": "Freedom is being able to create your future for yourself and in your relationship.",
    "quote.experience": "In feeling, authenticity and discovery, live experiences! A masculine-feminine balance for each partner.",
    "quote.promise": "A PROMISE: YOUR COUPLE WILL GROW, LAUGH AND ENJOY!",
    
    // Features
    "features.title": "Complete Support",
    "features.wounded": "Connect your wounded children and consenting adults",
    "features.relationship": "Frank and uninhibited relationship",
    "features.knowledge": "Know-how and knowledge of techniques",
    "features.body": "Knowledge of physical and energetic bodies",
    "features.footer": "Journey with me and my team, as open or closed couples. From the book to personalized support, find the formula that resonates with you — start alone or together!",
    
    // Book & Seminars
    "book.title": "The Book",
    "book.desc": "A spiritual tantric journey, a testimony of resilience, an inner awakening, conscious sexual freedom, a tantric initiatory journey across 5 continents, healing wounds and described sexual ecstasy.",
    "book.btn": "Order the book now",
    "seminars.title": "Seminars",
    "seminars.desc": "For couples. In a secure setting, in a magical place. In 2026: four 3-day sessions (no obligation to attend all) per year. And perhaps a dream week combining vacation, beauty, and practices.",
    "seminars.note": "(Dates not yet fixed, sign up to receive a newsletter.)",
    "seminars.btn": "Subscribe to newsletter",
    "surprise.title": "A surprise for 2026",
    "surprise.desc": "An exceptional event is being prepared for 2026. Be among the first informed by leaving your contact information.",
    "surprise.name": "Your name",
    "surprise.email": "Your email",
    "surprise.btn": "Be informed",
    
    // Parcours
    "parcours.title": "My Journey",
    "parcours.subtitle": "A transformative journey across 4 continents, 40 countries and countless encounters with the sacred",
    "parcours.education.title": "Education",
    "parcours.education.audencia": "Graduate of Audencia School of Management Nantes",
    "parcours.education.languages": "Fluent in French, English, German and Spanish",
    "parcours.education.dfs": "DFS Advanced Diploma in Support Relationships and Addictions, FPSHP Private Faculty of Human Sciences of Paris",
    "parcours.journey.title": "Professional Journey",
    "parcours.journey.commerce": "International trade on 4 continents for 10 years",
    "parcours.journey.burnout": "Burnout healed by crossing the Andes on horseback",
    "parcours.journey.hypnose": "Ericksonian hypnosis practitioner (1993-2000)",
    "parcours.journey.teacher": "Teacher of personal development and spirituality in the desert (1995-2000)",
    "parcours.journey.festival": "Coordinator of the Festival des Musiques Sacrées de Fès, Morocco (1997-2000)",
    "parcours.journey.artist": "Visual artist: photographer, painter, sculptor since 1996",
    "parcours.journey.polo": "Polo player, 3 times French Champion and other titles on 3 continents",
    "parcours.journey.tantrika": "Tantrika since 1998",
    "parcours.journey.traveller": "Traveller in over 40 countries",
    "parcours.influences.title": "Trainings & Influences",
    "parcours.influences.nonduality": "Non-Duality",
    "parcours.influences.nonduality.desc": "Meetings with Jean Klein, Eric Baret, Jacques Vigne, Stephen Jourdain, Andrew Cohen, Yvan Amar",
    "parcours.influences.saints": "Saints & Masters",
    "parcours.influences.saints.desc": "Sathya Sai Baba, Amma, the Dalai Lama, the 12th Gwalpang Rinpoche (who named me Jigme Rigdzin)",
    "parcours.influences.hypnosis": "Hypnosis & NLP",
    "parcours.influences.hypnosis.desc": "Milton Erickson, Watzlawick, Wittgenstein, Jane Turner, Alfred Korzybski (general semantics), Avatar Star Edge's Int.",
    "parcours.influences.therapy": "Therapies & Support Relations",
    "parcours.influences.therapy.desc": "Rebirth with Caroline Guidetti, Bach Flowers, individual and sports coaching, addictions (alcohol, sex) at Bobigny Faculty and AA",
    "parcours.influences.tantra": "Tantra & Sexuality",
    "parcours.influences.tantra.desc": "Sky Dancing Tantra (Margot Anand), Open to Bliss (Sathyama), OSHO's Tantra, Dark Eros (Karl di Foggia), Tantric massages (Kathia), Tamera Portugal (community for peace and sexual freedom), prostate and erotypes (Laura Pinson)",
    "parcours.influences.spiritual": "Spirituality & Symbolism",
    "parcours.influences.spiritual.desc": "Astrology/Astronomy (Luc Bigé), Yoga Nidra (André Rielh), Gospels (Jean-Yves Leloup), Sufism (Faouzi Skali), Grimm's Tales (JP DeBailleuil), Terre du Ciel",
    "parcours.influences.body": "Body & Energy",
    "parcours.influences.body.desc": "TAO Garden with Master Mantak Chia (Thailand), Tai Chi (Catherine), Chi Qong (Anette Burnotte), Yoga, Primal Scream, Herzen Lichtkörperprozess Chakras (Sandra Conrad)",
    "parcours.influences.desert": "Deserts & Nature",
    "parcours.influences.desert.desc": "Therapeutic stages in deserts (Douz, Mhamid, Wadi Rum), camel treks, crossing the Andes on horseback (Junin de Los Andes to Ushuaia, 1990)",
    "parcours.influences.sport": "High-Level Sports",
    "parcours.influences.sport.desc": "3 times French Polo Champion, 1989 World Championship (7th), mental coach French Polo team 2004, trilingual sports commentator",
    "parcours.influences.art": "Visual Art",
    "parcours.influences.art.desc": "Sculptures, photographs, paintings - about a hundred exhibitions",
    
    // Contact
    "contact.title": "Contact Me",
    "contact.subtitle": "Share your questions, needs, or interest in personalized support. I will respond with attention and kindness.",
    
    // Footer
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
