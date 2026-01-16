import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Merriweather, Roboto } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL('https://yume-blog.vercel.app'),
  title: {
    template: '%s | Yume Blog',
    default: 'Yume Blog',
  },
  description:
    'A blog about Yume, birds, food, and more.',
  openGraph: {
    title: 'Yume Blog',
    description:
      'A blog about Yume, birds, food, and more.',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'https://yume-blog.vercel.app',
  },
};

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${merriweather.variable} ${roboto.variable}`}
      >
        <div className="content">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
