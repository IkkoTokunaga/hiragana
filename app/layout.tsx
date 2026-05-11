import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ひらがな れんしゅう",
  description: "しょうがっこう ていがくねん むけ ひらがな れんしゅう さーびす",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen antialiased">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-primary-200">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2">
              <span className="text-3xl" aria-hidden="true">
                ✏️
              </span>
              <span className="text-xl font-bold text-primary-700">
                ひらがな れんしゅう
              </span>
            </a>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-4 py-6">{children}</main>
        <footer className="mx-auto max-w-3xl px-4 py-6 text-center text-xs text-gray-500">
          ひらがな れんしゅう さーびす
        </footer>
      </body>
    </html>
  );
}
