import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: `Cucari`,
    template: '%s - Cucari',
  },
  description: 'next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} no-scrollbar dark:bg-black`}>
        {children}
        <Footer />
        </body>
    </html>
  );
}
