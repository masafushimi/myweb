import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "伏見匡矩 | 株式会社エイチ 代表取締役",
  description: "伏見匡矩のビジョン・考え・経歴・実績を紹介するセルフブランディングサイト。AIを活用し、人と人、企業と企業が平等でなめらかに繋がる世界を創る。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
