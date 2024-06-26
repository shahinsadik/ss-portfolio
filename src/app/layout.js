import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import AosWrapper from "@/components/aosWrapper";

const poppins = Poppins({weight:[ '400' , '500' , '600' , '700' ,'800'],
subsets: ['latin'],
display: 'swap',});

export const metadata = {
  title: "SS Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <AosWrapper >{children}</ AosWrapper ></body> 
    </html>
  );
}
