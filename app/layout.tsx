import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { libreBaskerville, manrope } from "./fonts";
import { Header } from "@/components/layout/header";
import { ThemeScript } from "@/components/layout/theme-script";
import { siteConfig } from "@/data/site";
export const metadata: Metadata = {
  // Preview origin resolves sharing images only; canonicals require owner approval.
  metadataBase: new URL(
    siteConfig.url ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://xueshi-marketing.vercel.app"),
  ),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  robots: { index: Boolean(siteConfig.url), follow: Boolean(siteConfig.url) },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${libreBaskerville.variable} antialiased`}>
        <ThemeScript />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header navigation={siteConfig.navigation} />
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
