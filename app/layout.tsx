import { Providers } from "@/components/Providers";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const madeTommy = localFont({
  src: [
    { path: "../public/fonts/MADE TOMMY Thin.otf", weight: "100" },
    { path: "../public/fonts/MADE TOMMY Light.otf", weight: "300" },
    { path: "../public/fonts/MADE TOMMY Regular.otf", weight: "400" },
    { path: "../public/fonts/MADE TOMMY Medium.otf", weight: "500" },
    { path: "../public/fonts/MADE TOMMY Bold.otf", weight: "700" },
    { path: "../public/fonts/MADE TOMMY ExtraBold.otf", weight: "800" },
    { path: "../public/fonts/MADE TOMMY Black.otf", weight: "900" },
  ],
  variable: "--font-made",
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-comfortaa",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Celia v0.3",
  description: "Célia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${madeTommy.variable} ${comfortaa.variable} antialiased`}
      lang="fr"
    >
      <body className="font-[var(--font-made)] bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
