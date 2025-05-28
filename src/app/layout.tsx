import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Carlo Angeletti - Developer and IT Specialist",
  description: "Classe '87. Web developer con background da designer e tecnico IT, appassionato di cloud e soluzioni digitali per far crescere il business.",
  keywords: "Carlo Angeletti, Developer, IT, Cloud, AI",
  authors: [{ name: "Carlo Angeletti" }],
  openGraph: {
    title: "Carlo Angeletti - Developer and IT Specialist",
    description: "Web developer con background da designer e tecnico IT, appassionato di cloud e soluzioni digitali per far crescere il business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}