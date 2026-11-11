import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'خدمات',
    description: 'خدمات تخصصی لیان نانو زیست در حوزه کیت‌های تشخیصی، ایمنی غذایی و سلامت دام.',
};
export default function ServicesPage() {
    return (
        <div className="container mx-auto px-6 py-16 bg-brand-cream min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-brand-dark mb-6 text-center">خدمات تخصصی لیان نانو زیست</h1>
                <div className="w-24 h-2 bg-brand-cyan mx-auto rounded-full mb-12"></div>

                <div className="space-y-8">
                    {/* خدمت ۱ */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-cream flex flex-col md:flex-row gap-6 items-start hover:border-brand-cyan transition">
                        <div className="text-4xl bg-brand-cream p-4 rounded-2xl">🧬</div>
                        <div>
                            <h2 className="text-2xl font-bold text-brand-dark mb-3">کیت‌های تشخیصی باکتریوفاژ</h2>
                            <p className="text-brand-dark/70 leading-relaxed font-medium">
                                طراحی و توسعه کیت‌های نوین تشخیصی بر پایه باکتریوفاژها. این کیت‌ها با دقت و سرعت بالا، امکان شناسایی سریع آلودگی‌های میکروبی را فراهم می‌کنند.
                            </p>
                        </div>
                    </div>

                    {/* خدمت ۲ */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-cream flex flex-col md:flex-row gap-6 items-start hover:border-brand-cyan transition">
                        <div className="text-4xl bg-brand-cream p-4 rounded-2xl">🥗</div>
                        <div>
                            <h2 className="text-2xl font-bold text-brand-dark mb-3">ایمنی صنایع غذایی و دارویی</h2>
                            <p className="text-brand-dark/70 leading-relaxed font-medium">
                                ارائه راهکارهای نوآورانه برای حفظ ایمنی و کیفیت محصولات در صنایع غذایی و دارویی، با استفاده از فناوری‌های زیست‌فناوری و نانوتکنولوژی.
                            </p>
                        </div>
                    </div>

                    {/* خدمت ۳ */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-cream flex flex-col md:flex-row gap-6 items-start hover:border-brand-cyan transition">
                        <div className="text-4xl bg-brand-cream p-4 rounded-2xl">🐄</div>
                        <div>
                            <h2 className="text-2xl font-bold text-brand-dark mb-3">سلامت دام و دامداری</h2>
                            <p className="text-brand-dark/70 leading-relaxed font-medium">
                                تشخیص دقیق بیماری‌ها و آلودگی‌ها در دامداری‌ها با استفاده از کیت‌های تشخیصی پیشرفته، برای ارتقای سلامت دام و افزایش بهره‌وری صنعت دامداری.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}