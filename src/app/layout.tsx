import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { cn } from "@/lib/utils";
import DesktopNavBar from "@/components/Navigation/Menu";
import Footer from "@/components/Commons/Footer";
import { Toaster } from "@/components/ui/sonner"

const mont = localFont({
  src: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-mont"
})

const bfo = localFont({
  src: "../../public/fonts/BagelFatOne-Regular.ttf",
  display: 'swap',
  variable: '--font-bfo'
})

const cs = localFont({
  src: "../../public/fonts/ClickerScript-Regular.ttf",
  display: 'swap',
  variable: '--font-cs'
})

const raleway = localFont({
  src: "../../public/fonts/Raleway-VariableFont_wght.ttf",
  display: 'swap',
  variable: "--font-raleway"
});


const APP_NAME = "Pure Earth"
const APP_TEMPLATE_TITLE = "%s - Pure Earth"
const APP_DEFAULT_TITLE = "Pure Earth - Unearthing Tomorrow's Resources Today."
const APP_DEFAULT_DESCRIPTION = "Pure Earth is a leading mineral resource mining company dedicated to sustainable and ethical extraction practices. We provide high-quality minerals while prioritizing environmental stewardship and community welfare."

export const metadata: Metadata = {
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  manifest: "/manifest.json",
  creator: "Bytestreams",
  keywords: "",
  authors: [
    {
      name: "Jeremiah David",
      url: "https://jeremiahedavid.online"
    },
    {
      name: "Bytestream Innovators Limited",
      url: "https://bytestreaminnovators.ltd"
    }
  ],
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TEMPLATE_TITLE
  },
  alternates: {
    canonical: "/%s",
  },
  description: APP_DEFAULT_DESCRIPTION,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
    url: true,
  },
  icons: {
    icon: [
      { url: "/logo/pwa/ios/128.png" },
      { url: "/logo/favicon.ico", media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/logo/favicon.ico'],
    apple: [
      { url: '/logo/pwa/ios/32.png' },
      { url: '/logo/pwa/ios/180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TEMPLATE_TITLE,
    },
    description: APP_DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TEMPLATE_TITLE,
    },
    description: APP_DEFAULT_DESCRIPTION,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
};

export const viewport: Viewport = {
  themeColor: "#E2E2E2",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-visual',
  colorScheme: 'light',
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`min-h-screen font-mont font-normal`, raleway.variable, bfo.variable, cs.variable, mont.variable)}>
        <DesktopNavBar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
