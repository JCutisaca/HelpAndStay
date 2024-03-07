"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import global_en from '@/languages/en/global.json'
import global_es from '@/languages/es/global.json'
import { useEffect } from "react";
import AuthProvider from "@/components/Providers/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Help&Stay",
  description: "In progress",
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        global: global_en
      },
      es: {
        global: global_es
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default function RootLayout({ children }) {

  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const language = localStorage.getItem("language");
    i18n.changeLanguage(language);
  }, [])

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`bg-white ${inter.className}`}>
        <AuthProvider >
          <div className="ml-4 mr-4">
            <NavBar />
          </div>
          <div className="ml-4 mr-4">
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
