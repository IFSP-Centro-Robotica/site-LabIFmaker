import "./globals.css";
import { Inter } from "next/font/google";
import logo from "@/assets/LabIfLogo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LabIF Maker",
  description: "Site do LabIF Maker do Instituto Federal Campus Itapetininga",
  applicationName: "LabIF Maker",
  creator: "Instituto Federal de Ciência e Tecnologia Campus Itapetininga",
  authors: [
    {
      name: "Gustavo Rafael Cardilho",
      url: "https://www.linkedin.com/in/gustavo-rafael-cardilho-24b984248/",
    },
    {
      name: "João Pedro Martins De Oliveira",
      url: "https://www.linkedin.com/in/joão-pedro-martins-de-oliveira-969712272/",
    },
  ],
  keywords: [
    "LabIF",
    "Maker",
    "IFSP",
    "Itapetininga",
    "Instituto Federal",
    "Instituto Federal de Ciência e Tecnologia",
    "Instituto Federal de Ciência e Tecnologia Campus Itapetininga",
    "IF",
    "IFSP",
    "IFSP Itapetininga",
    "IFSP Campus Itapetininga",
    "IFSP Campus Itapê",
    "IFSP Itapê",
    "LabIF Maker",
    "LabIF Maker Itapetininga",
    "LabIF Maker Itapê",
    "IF Itapê",
    "IF Itapetininga",
  ],
  url: "https://labifmaker.vercel.app/",
  icons: [
    {
      src: logo,
      sizes: "512x512",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
