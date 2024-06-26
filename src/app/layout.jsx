import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
// import SessionProvider from "@/utils/SessionProvider";
import AuthProvider from "@/utils/SessionProvider";
import Loading from "./loading";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SkillBeHired",
  description: "Made by GD using next-app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          precedence="default"
        />
        {/*GOOGLE FONTS*/}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider session={session}>
            <div className="main min-h-screen">
              <div className="container">
                <Navbar />
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </div>
              <Footer title="SkillBeHired" rights="GD & RA" />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
