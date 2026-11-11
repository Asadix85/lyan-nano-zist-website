import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const vazir = Vazirmatn({
    subsets: ["arabic"],
    weight: ['300', '400', '500', '700', '900'],
    variable: '--font-vazir',
});

export const metadata: Metadata = {
    title: {
        default: "لیان نانو زیست | کیت‌های تشخیصی باکتریوفاژ",
        template: "%s | لیان نانو زیست"
    },
    description: "لیان نانو زیست، ارائه‌دهنده راهکارهای نوآورانه برای حفظ ایمنی صنایع غذایی و دارویی با طراحی کیت‌های تشخیصی بر پایه باکتریوفاژ.",
    keywords: ["کیت تشخیصی", "باکتریوفاژ", "نانو زیست", "ایمنی غذایی", "دامداری", "زیست فناوری", "لیان نانو زیست"],
    authors: [{ name: "Lyan Nano Zist" }],
    openGraph: {
        title: "لیان نانو زیست | کیت‌های تشخیصی باکتریوفاژ",
        description: "ارائه‌دهنده راهکارهای نوآورانه برای حفظ ایمنی صنایع غذایی و دارویی.",
        url: "https://lyannanozist.com",
        siteName: "لیان نانو زیست",
        locale: "fa_IR",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fa" dir="rtl" className={vazir.variable}>
        <body className="font-sans min-h-screen flex flex-col bg-brand-cream text-brand-dark antialiased">
        <Header />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}