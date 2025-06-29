import type { Metadata } from "next";
import { Nunito_Sans, Poppins, Berkshire_Swash } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const nunito = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});
const berkshire_swash = Berkshire_Swash({
  variable: "--font-berkshire_swash",
  weight: ['400'],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Home | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${berkshire_swash.variable} ${poppins.variable} font-nunito-sans antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
