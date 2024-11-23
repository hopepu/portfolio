// app/layout.tsx

import { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

// 폰트 설정 (예시)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio Cho Yong Jae",
  description: "취업을 위한 포트폴리오",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description ?? "Default Description"} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* 헤더, 푸터 등 공통 레이아웃 적용 */}
      <header>
        <nav>
          <ul>
            <Link href="/">Home</Link>
            <Link href="/about.tsx">About</Link>
            <Link href="/contact.tsx">Contact</Link>
          </ul>
        </nav>
      </header>

      {/* 자식 페이지 내용 */}
      <main>{children}</main>

      <footer>
        <p>&copy; 2024 Portfolio Cho Yong Jae</p>
      </footer>
      </body>
      </html>
  );
}
