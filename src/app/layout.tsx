import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from '@/components/StructuredData';

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
  description: "PT와 운동에 필요한 근육별 기능, 강화 방법, 스트레칭, 관련 운동을 인터랙티브한 근육 지도를 통해 쉽게 학습하세요. 해부학 정보부터 실전 운동법까지 한번에!",
  keywords: ["근육", "해부학", "PT", "운동", "스트레칭", "근력", "피트니스", "헬스", "인체구조", "근육지도"],
  openGraph: {
    title: "근육 지도 - 인체 근육 구조와 운동법 가이드",
    description: "PT와 운동에 필요한 근육별 기능, 강화 방법, 스트레칭, 관련 운동을 인터랙티브한 근육 지도를 통해 쉽게 학습하세요.",
    type: "website",
    locale: "ko_KR",
    siteName: "근육 지도",
  },
  twitter: {
    card: "summary_large_image",
    title: "근육 지도 - 인체 근육 구조와 운동법 가이드",
    description: "PT와 운동에 필요한 근육별 기능, 강화 방법, 스트레칭, 관련 운동을 인터랙티브한 근육 지도를 통해 쉽게 학습하세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
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
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
