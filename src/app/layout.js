import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"]});

export const metadata = {
  title: "Cognition",
  description: "A dope website with dope content",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
