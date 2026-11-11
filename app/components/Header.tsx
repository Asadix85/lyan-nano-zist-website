import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-brand-cream/80 backdrop-blur-md border-b border-brand-dark/10 sticky top-0 z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-14 h-14">
                        <Image src="/logo.png" alt="لوگوی لیان نانو زیست" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-black text-brand-dark leading-none">لیان</h1>
                        <span className="text-xs text-brand-cyan font-bold mt-1 tracking-wider">NANO ZIST</span>
                    </div>
                </Link>

                <nav className="hidden md:flex gap-6 font-bold text-brand-dark">
                    <Link href="/" className="hover:text-brand-cyan transition">صفحه اصلی</Link>
                    <Link href="/about" className="hover:text-brand-cyan transition">درباره ما</Link>
                    <Link href="/services" className="hover:text-brand-cyan transition">خدمات</Link>
                    <Link href="/products" className="hover:text-brand-cyan transition">محصولات</Link>
                    <Link href="/blog" className="hover:text-brand-cyan transition">وبلاگ</Link>
                    <Link href="/contact" className="hover:text-brand-cyan transition">تماس با ما</Link>
                </nav>

                <Link href="/contact" className="bg-brand-cyan text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-dark transition duration-300 shadow-md">
                    درخواست مشاوره
                </Link>
            </div>
        </header>
    );
}