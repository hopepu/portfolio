import { ReactNode } from "react";
import localFont from "next/font/local";
import "../styles/globals.css";  // styles 폴더의 globals.css 임포트
import Head from "next/head";
import Link from "next/link";

// 폰트 설정
const geistSans = localFont({
    src: "/fonts/GeistVF.woff",  // public/fonts/ 경로에 있는 파일을 절대 경로로 설정
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "/fonts/GeistMonoVF.woff",  // 마찬가지로 절대 경로로 설정
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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 헤더, 푸터 등 공통 레이아웃 적용 */}
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/"> Home </Link>
                    </li>

                    <li>
                        <Link href="/about"> About me </Link>
                    </li>

                    <li>
                        <Link href="/skill"> Skills </Link>
                    </li>

                    <li>
                        <Link href="/career"> Career </Link>
                    </li>

                    <li>
                        <Link href="/project"> Projects </Link>
                    </li>


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
