import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Glitch Brainer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-white`}>
        <Navbar />
        {children}
        
        <Footer/>
      
      </body>
    </html>
  );
}