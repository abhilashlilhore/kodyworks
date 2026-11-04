import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KODY Works | IT Consulting & Software Development",
  description: "KODY Works - Leading IT consulting company providing web development, generative AI, Salesforce, SAP, cloud & DevOps, mobile app development, MVP development and staffing solutions.",
  keywords: ["KODY Works", "IT consulting", "web development", "generative AI", "Salesforce", "SAP", "cloud DevOps", "mobile app development", "MVP development", "staffing solutions"],
  authors: [{ name: "KODY Works" }],
  creator: "KODY Works",
  publisher: "KODY Works",
  metadataBase: new URL("https://kodyworks.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kodyworks.com",
    title: "KODY Works | IT Consulting & Software Development",
    description: "KODY Works - Leading IT consulting company providing web development, generative AI, Salesforce, SAP, cloud & DevOps, mobile app development, MVP development and staffing solutions.",
    siteName: "KODY Works",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "KODY Works Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KODY Works | IT Consulting & Software Development",
    description: "KODY Works - Leading IT consulting company providing web development, generative AI, Salesforce, SAP, cloud & DevOps, mobile app development, MVP development and staffing solutions.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-transparent" suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DWB5E0400Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DWB5E0400Z');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
