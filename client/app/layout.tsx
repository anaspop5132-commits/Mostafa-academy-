import "./globals.css";

export const metadata = {
  title: "أكاديمية مستر مصطفى",
  description: "منصة تعليمية احترافية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
