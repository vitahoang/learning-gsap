import "~/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "./_component/navbar";

export const metadata: Metadata = {
  title: "Learn GSAP",
  description: "A playground to learn GSAP animations with React and Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        {Navbar()}
        <main className="min-h-screen bg-zinc-950 text-white">{children}</main>
      </body>
    </html>
  );
}
