'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function AdminDashboard() {
    const [messages, setMessages] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        // چک کردن وضعیت لاگین کاربر
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                // اگر لاگین نکرده بود، هدایت به صفحه لاگین
                router.push('/login');
            } else {
                setUser(session.user);
                fetchMessages();
            }
        };

        checkUser();

        // گوش دادن به تغییرات لاگین (مثلاً خروج)
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                router.push('/login');
            }
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [router]);

    const fetchMessages = async () => {
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setMessages(data);
        setIsLoading(false);
    };

    const markAsRead = async (id: number) => {
        const { error } = await supabase
            .from('messages')
            .update({ status: 'read' })
            .eq('id', id);

        if (!error) {
            setMessages(messages.map(msg =>
                msg.id === id ? { ...msg, status: 'read' } : msg
            ));
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    // تا زمانی که وضعیت کاربر چک نشده، صفحه لودینگ نشون بده
    if (isLoading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-brand-dark font-bold text-xl animate-pulse">در حال بررسی دسترسی...</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">

                <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div>
                        <h1 className="text-2xl font-black text-brand-dark">پنل مدیریت لیان نانو زیست</h1>
                        <p className="text-gray-500 text-sm mt-1">خوش آمدید، {user.email}</p>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/" className="bg-gray-100 text-brand-dark px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition">
                            سایت اصلی
                        </Link>
                        <button onClick={handleLogout} className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-100 transition">
                            خروج
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-r-4 border-r-brand-cyan">
                        <h3 className="text-gray-500 text-sm font-bold mb-2">کل پیام‌ها</h3>
                        <p className="text-3xl font-black text-brand-dark">{messages.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-r-4 border-r-brand-gold">
                        <h3 className="text-gray-500 text-sm font-bold mb-2">پیام‌های خوانده نشده</h3>
                        <p className="text-3xl font-black text-brand-dark">
                            {messages.filter(m => m.status === 'unread').length}
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-brand-dark">صندوق پیام‌ها</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-right">
                            <thead className="bg-gray-50 text-gray-500 text-sm">
                            <tr>
                                <th className="px-6 py-4 font-bold">فرستنده</th>
                                <th className="px-6 py-4 font-bold">ایمیل</th>
                                <th className="px-6 py-4 font-bold">موضوع</th>
                                <th className="px-6 py-4 font-bold">متن پیام</th>
                                <th className="px-6 py-4 font-bold">وضعیت</th>
                                <th className="px-6 py-4 font-bold">عملیات</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                            {messages.length === 0 ? (
                                <tr><td colSpan={6} className="text-center py-8 text-gray-500">هیچ پیامی وجود ندارد.</td></tr>
                            ) : (
                                messages.map((msg) => (
                                    <tr key={msg.id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 font-bold text-brand-dark">{msg.name}</td>
                                        <td className="px-6 py-4 text-gray-600 text-left" dir="ltr">{msg.email}</td>
                                        <td className="px-6 py-4 text-gray-600">{msg.subject}</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">{msg.message}</td>
                                        <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${msg.status === 'unread' ? 'bg-brand-gold/20 text-brand-dark' : 'bg-green-100 text-green-700'}`}>
                          {msg.status === 'unread' ? 'خوانده نشده' : 'خوانده شده'}
                        </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {msg.status === 'unread' && (
                                                <button onClick={() => markAsRead(msg.id)} className="text-brand-cyan hover:text-brand-dark font-bold text-sm transition">
                                                    علامت‌گذاری
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}