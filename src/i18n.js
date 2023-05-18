import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      header1: "We create our own",
      header2: "blogging environment",
      header3: ` We find communication with our clients to be an absolutely crucial aspect
      of success. That's why we've decided to share this blog with you
      to open the door to the inner workings of our company. This way you can be closer to us than
      than ever before.`,
      postLink: "Show more...",
      postComment: "comments",
      nav1: "Home",
      nav2: "Services",
      nav3: "Products",
      nav4: "References",
      nav5: "Partners",
      nav6: "Out team",
      nav7: "Carreers",
      nav8: "Contact",
      returnToMain: "Return to main page",
      error: "Oops, the page you're trying to find doesn't exist...",
    },
  },
  cz: {
    translation: {
      header1: "Vytváříme vlastní",
      header2: "blogerské prostředí",
      header3: `Komunikace s našimi klienty nám příjde jako naprosto klíčoví aspekt
      úspěchu. Proto jsme se s vámi rozhodli sdílet tento blog, který vám
      otevře dveře do nitra naší firmy. Díky tomu nám můžete být blíž než
      kdykoliv předtím.`,
      postLink: "Celý příspěvek...",
      postComment: "komentáře",
      nav1: "Domů",
      nav2: "Služby",
      nav3: "Produkty",
      nav4: "Partneři",
      nav5: "Reference",
      nav6: "Náš tým",
      nav7: "Kariéra",
      nav8: "Kontakt",
      returnToMain: "Zpátky na hlavní Stranu",
      error: "Jejda, stránka kterou se snažíte najít neexistuje...",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "cz",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
