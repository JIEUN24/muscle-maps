import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "근육 지도 - 인체 근육 구조와 운동법 가이드",
  description:
    "PT와 운동에 필요한 근육별 기능, 강화 방법, 스트레칭, 관련 운동을 인터랙티브한 근육 지도를 통해 쉽게 학습하세요. 해부학 정보부터 실전 운동법까지 한번에!",
  keywords: [
    "근육",
    "해부학",
    "PT",
    "운동",
    "스트레칭",
    "근력",
    "피트니스",
    "헬스",
    "인체구조",
    "근육지도",
  ],
  openGraph: {
    title: "근육 지도 - 인체 근육 구조와 운동법 가이드",
    description:
      "PT와 운동에 필요한 근육별 기능, 강화 방법, 스트레칭, 관련 운동을 인터랙티브한 근육 지도를 통해 쉽게 학습하세요.",
    type: "website",
    locale: "ko_KR",
    siteName: "근육 지도",
  },
  twitter: {
    card: "summary_large_image",
    title: "근육 지도 - 인체 근육 구조와 운동법 가이드",
    description:
      "PT와 운동에 필요한 근육별 기능, 강화 방법, 스트레칭, 관련 운동을 인터랙티브한 근육 지도를 통해 쉽게 학습하세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  // 🆕 사이트 인증 메타태그 추가
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },

  // 🆕 애드센스 계정 정보
  other: {
    "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 🆕 Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* 🆕 Google AdSense */}
        {/* <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        /> */}

        <StructuredData />
        {children}
      </body>
    </html>
  );
}
