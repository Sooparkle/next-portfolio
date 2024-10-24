import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import {Noto_Serif_KR } from 'next/font/google'


const notoSerifKR = Noto_Serif_KR({
  weight: ['400', '500', '600','700', '900'], // 사용할 폰트 두께 (일반 및 굵게)
  subsets: ['latin'],     // 사용할 문자 집합 (라틴 문자가 기본적으로 지원됨)
  display: 'swap',        // 폰트 로딩 전략 (optional)
});


export const metadata: Metadata = {
  title: "SooHan Portfolio",
  description: "this is Front-End Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSerifKR.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
