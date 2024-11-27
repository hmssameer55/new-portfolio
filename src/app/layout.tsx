import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SEO_DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans, Sora, } from "next/font/google";
import "./globals.css";

const fontSans = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_DATA.url),
  title: {
    default: SEO_DATA.name,
    template: `%s | ${SEO_DATA.name}`,
  },
  description: SEO_DATA.description,
  openGraph: {
    title: `${SEO_DATA.name}`,
    description: SEO_DATA.description,
    url: SEO_DATA.url,
    siteName: `${SEO_DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${SEO_DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "vwwi-S90LUr3rJXImFB3oOJ_fn1tM5XoGNU8kXZ5kgI",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen  bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
