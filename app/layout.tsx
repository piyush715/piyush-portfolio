import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/lib/content";
import "./globals.css";

// Both fonts are self-hosted (OFL) so builds never depend on Google Fonts.
const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const instrumentSerif = localFont({
  src: "./fonts/InstrumentSerif-Regular.woff2",
  variable: "--font-instrument",
  weight: "400",
  display: "swap",
});

const title = `${profile.name} — ${profile.title}`;
const description = `${profile.name} is an ${profile.title} building intelligent systems with Artificial Intelligence, Machine Learning, and Computer Vision.`;

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to your deployed domain so link previews resolve.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title,
    description,
    siteName: profile.name,
    images: [{ url: "/images/profile.png", alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/profile.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#060606",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-5 focus:py-2.5 focus:text-sm focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
