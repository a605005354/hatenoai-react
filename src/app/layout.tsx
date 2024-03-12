import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { AuthProvider } from "@/utils/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HatenoAI",
  description: "Welcome to Hateno World",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <div className={'container'}>
            <NavBar />
            {children}
            <Footer />
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
