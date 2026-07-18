import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AudioZoneSL — Where The Community Begins",
  description:
    "AudioZoneSL is Sri Lanka's premier audio engineering community. Professional mixing, mastering, sound design, and music production. Coming soon.",
  keywords: [
    "audio engineering",
    "music production",
    "Sri Lanka",
    "mixing",
    "mastering",
    "sound design",
    "AudioZoneSL",
  ],
  openGraph: {
    title: "AudioZoneSL — Where The Community Begins",
    description:
      "Sri Lanka's premier audio engineering community. Professional mixing, mastering, and sound design.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AudioZoneSL — Where The Community Begins",
    description:
      "Sri Lanka's premier audio engineering community. Professional mixing, mastering, and sound design.",
  },
  icons: {
    icon: "/favicon.ico",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
