import { Rubik, Poppins } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

export const metadata = {
  title: "Poolito – Pool & Cleaning Solutions",
  description: "Professional cleaning services for your home and business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}