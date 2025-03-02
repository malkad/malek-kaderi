import "~/styles/globals.sass";

import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import { ThemeContextProvider } from "~/contexts/ThemeContext";

import TopNavBar from "~/components/TopNavBar";

export const metadata: Metadata = {
  title: "Malek Kaderi",
  description: "Personal website of Malek Kaderi, resume and portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeContextProvider className="body">
          <TopNavBar />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
