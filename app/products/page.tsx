import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'محصولات',
    description: 'کیت‌های تشخیصی پیشرفته لیان نانو زیست برای صنایع غذایی و دامداری.',
};
export default function ProductsPage() {
    const products = [
        {
            id: 1,
            title: 'کیت تشخیص سالمونلا',
            category: 'صنایع غذایی',
            description: 'تشخیص سریع و دقیق باکتری سالمونلا در محصولات غذایی با استفاده از فناوری باکتریوفاژ.',
            features: ['نتیجه در کمتر از ۲ ساعت', 'دقت بالای ۹۹٪', 'بدون نیاز به تجهیزات پیچیده'],
            icon: '🧪'
        },
        {
            id: 2,
            title: 'کیت تشخیص E. coli',
            category: 'صنایع غذایی',
            description: 'شناسایی آلودگی‌های اشریشیا کلی (E. coli) در نمونه‌های غذایی و آب.',
            features: ['قابلیت استفاده در میدان', 'کیت آماده به استفاده', 'حساسیت بالا'],
            icon: '🔬'
        },
        {
            id: 3,
            title: 'کیت تشخیص ورم پستان دام',
            category: 'دامداری',
            description: 'تشخیص زودهنگام عفونت ورم پستان در دام‌های شیری برای جلوگیری از کاهش تولید شیر.',
            features: ['تشخیص در مراحل اولیه', 'کاهش مصرف آنتی‌بیوتیک', 'افزایش بهره‌وری دامداری'],
            icon: '🐄'
        },
        {
            id: 4,
            title: 'کیت تشخیص بروسلوز',
            category: 'دامداری',
            description: 'شناسایی بیماری بروسلوز (تب مالت) در دام‌ها با دقت بالا و سرعت بالا.',
            features: ['ایمنی بالا برای کاربر', 'نتیجه سریع', 'قابل استفاده در دامپزشکی'],
            icon: '🩺'
        },
    ];

    return (
        <div className="bg-brand-cream min-h-screen">

            {/* هدر صفحه */}
            <section className="bg-brand-dark text-brand-cream py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan opacity-10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">محصولات لیان نانو زیست</h1>
                    <div className="w-24 h-2 bg-brand-gold mx-auto rounded-full mb-6"></div>
                    <p className="text-brand-cream/80 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                        کیت‌های تشخیصی پیشرفته بر پایه باکتریوفاژ، طراحی شده برای ایمنی صنایع غذایی و سلامت دام.
                    </p>
                </div>
            </section>

            {/* لیست محصولات */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-3xl p-8 shadow-sm border border-brand-cream hover:shadow-xl hover:border-brand-cyan transition duration-300 group flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-5xl bg-brand-cream/50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-brand-cyan group-hover:text-white transition duration-300">
                                    {product.icon}
                                </div>
                                <span className="bg-brand-gold/20 text-brand-dark px-3 py-1 rounded-full text-xs font-bold border border-brand-gold/50">
                  {product.category}
                </span>
                            </div>

                            <h2 className="text-2xl font-black text-brand-dark mb-3">{product.title}</h2>
                            <p className="text-brand-dark/70 font-medium leading-relaxed mb-6 flex-grow">
                                {product.description}
                            </p>

                            <div className="bg-brand-cream/30 p-4 rounded-xl mb-6">
                                <h3 className="text-sm font-bold text-brand-dark mb-3">ویژگی‌های کلیدی:</h3>
                                <ul className="space-y-2">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-brand-dark/80 font-medium">
                                            <span className="text-brand-cyan font-bold">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact" className="block text-center w-full bg-brand-dark text-brand-cream font-bold py-3 rounded-xl hover:bg-brand-cyan transition duration-300">
                                درخواست مشاوره و خرید
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}