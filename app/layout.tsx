import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import {Noto_Serif_KR, Roboto_Mono } from 'next/font/google'



const notoSerifKR = Noto_Serif_KR({
  weight: ['400', '500', '600','700', '900'],
  subsets: ['latin'], 
  display: 'swap',
});
const Roboto =Roboto_Mono ({
  weight: ['400', '500', '600','700'],
  subsets: ['latin'], 
  display: 'swap',
});


export const metadata: Metadata = {
  title: "SooHan Portfolio",
  description: "This is Front-End Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSerifKR.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
