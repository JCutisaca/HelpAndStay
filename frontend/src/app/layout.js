import { Inter } from "next/font/google";
import "./globals.css";
import favicon from './favicon.ico';
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Help&Stay",
  description: "In progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`bg-white ${inter.className}`}>
        <div className="ml-4 mr-4">
          <NavBar />
        </div>
        <div className="ml-4 mr-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
