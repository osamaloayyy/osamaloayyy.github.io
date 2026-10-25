import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "./globals.css";
import {Copyright} from "@/components/Copyright";

export const metadata: Metadata = {
  title: {
    default: "Osama Mansour",
    template: "%s | Osama",
  },
  description:
    "A technical portfolio covering systems security, privacy-preserving communication, research, and security engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en|de">
      <body>
        <Navbar />

        <main>{children}</main>

        <footer className="border-t border-zinc-800 py-8">
          <div className="container-width flex flex-col justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
           <Copyright /> 
            
          </div>
        </footer>
      </body>
    </html>
  );
}