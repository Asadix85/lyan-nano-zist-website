import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-brand-cream px-6">
            <div className="text-center">
                <h1 className="text-8xl md:text-9xl font-black text-brand-cyan mb-4 tracking-tighter">404</h1>
                <h2 className="text-3xl font-black text-brand-dark mb-4">صفحه مورد نظر یافت نشد!</h2>
                <p className="text-brand-dark/70 font-medium mb-8 max-w-md mx-auto">
                    متأسفانه صفحه‌ای که به دنبال آن بودید وجود ندارد یا حذف شده است.
                </p>
                <Link href="/" className="bg-brand-dark text-brand-cream px-8 py-4 rounded-xl font-bold hover:bg-brand-cyan transition duration-300 shadow-lg">
                    بازگشت به صفحه اصلی
                </Link>
            </div>
        </div>
    );
}