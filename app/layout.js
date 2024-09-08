import Header from "./Header/Header"
import Footer from "./Footer/Footer"

import { Inter } from "next/font/google";
import '@/app/globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ferrolink Industries",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
