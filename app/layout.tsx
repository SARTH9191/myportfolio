import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FormspreeClientProvider from "../components/FormspreeClientProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sarthak Pawar | AI & Full-Stack Developer",

  description: "Portfolio of Sarthak Pawar, a Computer Science Engineering student, AI developer, and technology leader building AI-powered solutions that create real-world impact.",

  keywords: ["Sarthak Pawar", "Sarth", "VIT Pune", "AI Developer", "Full Stack Developer", "LangChain", "LangGraph", "Next.js Portfolio", "Pune"],

  authors: [{ name: "Sarthak Pawar" }],

  openGraph: {

    title: "Sarthak Pawar | AI & Full-Stack Developer",

    description: "Building AI-powered solutions that create real-world impact.",

    type: "website",

    locale: "en_US",

  },

  twitter: {

    card: "summary_large_image",

    title: "Sarthak Pawar | AI & Full-Stack Developer",

    description: "Building AI-powered solutions that create real-world impact.",

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
        <FormspreeClientProvider>{children}</FormspreeClientProvider>
      </body>
    </html>
  );
}
