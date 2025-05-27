import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const font = Quicksand({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SimpliTaught Token (TAWT)",
  description: `
    SimpliTaught Token (TAWT) is a cryptocurrency designed specifically for the SimpliTaught ecosystem, which aims to revolutionize the education and learning industry. Built on the Solana blockchain, TAWT serves as a utility token that facilitates payments for educational resources such as books and subscriptions, while also rewarding students and educators for their engagement within the platform. The mission of SimpliTaught Token (TAWT) is to create an accessible, decentralized learning economy where participants can benefit from a transparent and efficient transaction system, ultimately enhancing educational opportunities globally.
  `,
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-VXTS5ML8Z0`}
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VXTS5ML8Z0', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${font.variable} antialiased`}>{children}</body>
    </html>
  );
}
