import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Nur Uddin | Full-Stack Developer",
    template: "%s | Nur Uddin",
  },
  description:
    "Professional portfolio of Nur Uddin — full-stack developer building modern, high-performance web applications.",
  keywords: [
    "Nur Uddin",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Nur Uddin" }],
  creator: "Nur Uddin",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Nur Uddin | Full-Stack Developer",
    description:
      "Professional portfolio showcasing full-stack development, modern UI, and production-grade web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Nur Uddin | Full-Stack Developer",
    description:
      "Professional portfolio of Nur Uddin — full-stack developer.",
  },
};

export const viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
