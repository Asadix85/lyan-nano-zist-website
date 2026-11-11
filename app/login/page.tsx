'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError('ایمیل یا رمز عبور اشتباه است.');
            setIsLoading(false);
        } else {
            // هدایت به پنل ادمین
            router.push('/admin');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-brand-cream px-6">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-cream w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-brand-gold font-black text-2xl">L</span>
                    </div>
                    <h1 className="text-2xl font-black text-brand-dark">ورود به پنل مدیریت</h1>
                    <p className="text-gray-500 text-sm mt-2">لیان نانو زیست</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-6 text-sm font-bold text-center border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-brand-dark mb-2">ایمیل</label>
                        <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-brand-cream bg-brand-cream/30 focus:ring-2 focus:ring-brand-cyan outline-none transition font-medium text-left"
                            dir="ltr"
                            placeholder="admin@lyannanozist.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-brand-dark mb-2">رمز عبور</label>
                        <input
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-brand-cream bg-brand-cream/30 focus:ring-2 focus:ring-brand-cyan outline-none transition font-medium text-left"
                            dir="ltr"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full bg-brand-cyan text-white font-bold py-4 rounded-xl hover:bg-brand-dark transition duration-300 shadow-lg shadow-brand-cyan/20 disabled:opacity-50"
                    >
                        {isLoading ? 'در حال ورود...' : 'ورود به پنل'}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <Link href="/" className="text-sm text-gray-500 hover:text-brand-cyan transition font-medium">
                        بازگشت به سایت
                    </Link>
                </div>
            </div>
        </div>
    );
}