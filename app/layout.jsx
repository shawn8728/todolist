"use client";

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import { AuthProvider } from "@/context/AuthContext";

// Prevent fontawesome from dynamically adding its css
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Todolist</title>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex min-h-screen flex-col relative">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
