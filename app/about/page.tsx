import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'درباره ما',
    description: 'آشنایی با شرکت دانش‌بنیان لیان نانو زیست، مأموریت، چشم‌انداز و تیم متخصص ما.',
};
export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-16 bg-brand-cream min-h-screen">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">درباره لیان نانو زیست</h1>
                <div className="w-24 h-2 bg-brand-cyan mx-auto rounded-full mb-8"></div>

                <p className="text-lg text-brand-dark/80 leading-relaxed text-justify font-medium bg-white p-8 rounded-3xl shadow-sm border border-brand-cream">
                    لیان نانو زیست یک شرکت استارتاپی در حوزه <strong className="text-brand-cyan">زیست‌فناوری و نانوتکنولوژی</strong> است که با تمرکز بر طراحی و توسعه کیت‌های نوین تشخیصی بر پایه <strong>باکتریوفاژها</strong>، به دنبال ارائه راهکارهای دقیق و سریع برای صنایع غذایی و دامداری‌ها است. هدف از تشکیل این شرکت تبدیل شدن به یکی از بازیگران اصلی حوزه‌ی تشخیص در زمینه‌های پزشکی و دامپزشکی است. اعضای تیم با پشتکار و تعهد مثال‌زدنی، در مسیر دستیابی به این هدف گام برمی‌دارند و ارتقای سلامت جامعه را مأموریت اصلی خود می‌دانند.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-4">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-cream hover:border-brand-gold transition">
                        <h3 className="text-xl font-black text-brand-dark mb-3">چشم‌انداز</h3>
                        <p className="text-brand-dark/70 text-sm font-medium">تبدیل شدن به یکی از بازیگران اصلی حوزه تشخیص در زمینه‌های پزشکی و دامپزشکی.</p>
                    </div>
                    <div className="bg-brand-dark p-8 rounded-3xl shadow-lg text-brand-cream transform md:-translate-y-4">
                        <h3 className="text-xl font-black text-brand-gold mb-3">مأموریت</h3>
                        <p className="text-brand-cream/80 text-sm font-medium">ارائه راهکارهای دقیق و سریع برای حفظ ایمنی صنایع غذایی و دارویی و ارتقای سلامت جامعه.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-cream hover:border-brand-cyan transition">
                        <h3 className="text-xl font-black text-brand-dark mb-3">ارزش‌ها</h3>
                        <p className="text-brand-dark/70 text-sm font-medium">نوآوری، دقت علمی، پشتکار و تعهد به سلامت جامعه.</p>
                    </div>
                </div>

                {/* اطلاعات تکمیلی از لینکدین */}
                <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-bold text-brand-dark">
                    <span className="bg-white px-4 py-2 rounded-xl border border-brand-cream shadow-sm">📍 اصفهان، اصفهان</span>
                    <span className="bg-white px-4 py-2 rounded-xl border border-brand-cream shadow-sm">👥 ۲ تا ۱۰ کارمند</span>
                    <span className="bg-white px-4 py-2 rounded-xl border border-brand-cream shadow-sm">📅 تأسیس ۲۰۲۴</span>
                </div>
            </div>
        </div>
    );
}