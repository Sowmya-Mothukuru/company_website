import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-[#F8FBFF]`} >
          {children}
        
        <Footer/>
      
      </body>
    </html>
  );
}