'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const { error } = await supabase
            .from('messages')
            .insert([{
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                status: 'unread'
            }]);

        setIsLoading(false);

        if (error) {
            alert('خطا در ارسال پیام. لطفاً دوباره تلاش کنید.');
            console.error(error);
        } else {
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }
    };

    return (
        <div className="container mx-auto px-6 py-16 bg-brand-cream min-h-screen">
            <div className="max-w-5xl mx-auto">

                {/* هدر صفحه */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">تماس با ما</h1>
                    <div className="w-24 h-2 bg-brand-cyan mx-auto rounded-full mb-6"></div>
                    <p className="text-brand-dark/80 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                        تیم پشتیبانی و مشاوره لیان نانو زیست آماده پاسخگویی به سوالات و نیازهای شماست.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* فرم تماس */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-cream animate-fade-in-up animation-delay-200">
                        <h2 className="text-2xl font-black text-brand-dark mb-6">ارسال پیام</h2>

                        {isSubmitted && (
                            <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 font-bold text-sm border border-green-200 flex items-center gap-2">
                                <span>✅</span>
                                پیام شما با موفقیت ارسال شد.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-brand-dark mb-2">نام و نام خانوادگی</label>
                                <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-brand-cream bg-brand-cream/30 focus:ring-2 focus:ring-brand-cyan outline-none transition font-medium" placeholder="نام خود را وارد کنید" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-dark mb-2">ایمیل</label>
                                <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-3 rounded-xl border border-brand-cream bg-brand-cream/30 focus:ring-2 focus:ring-brand-cyan outline-none transition font-medium text-left" dir="ltr" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-dark mb-2">موضوع</label>
                                <input required name="subject" value={formData.subject} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-brand-cream bg-brand-cream/30 focus:ring-2 focus:ring-brand-cyan outline-none transition font-medium" placeholder="موضوع پیام" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-dark mb-2">متن پیام</label>
                                <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-brand-cream bg-brand-cream/30 focus:ring-2 focus:ring-brand-cyan outline-none transition resize-none font-medium" placeholder="پیام خود را اینجا بنویسید..."></textarea>
                            </div>
                            <button disabled={isLoading} type="submit" className="w-full bg-brand-cyan text-white font-bold py-4 rounded-xl hover:bg-brand-dark transition duration-300 shadow-lg shadow-brand-cyan/20 disabled:opacity-50">
                                {isLoading ? 'در حال ارسال...' : 'ارسال پیام'}
                            </button>
                        </form>
                    </div>

                    {/* بخش اطلاعات تماس */}
                    <div className="space-y-6 animate-fade-in-up animation-delay-400">

                        {/* کارت اطلاعات تماس */}
                        <div className="bg-brand-dark text-brand-cream p-8 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-cyan opacity-20 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                            <h2 className="text-2xl font-black text-brand-gold mb-6 relative z-10">اطلاعات تماس</h2>

                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl mt-1 bg-brand-cream/10 p-2 rounded-lg">📍</span>
                                    <div>
                                        <h4 className="font-bold text-brand-cream">آدرس دفتر مرکزی</h4>
                                        <p className="text-brand-cream/70 text-sm mt-1 font-medium leading-relaxed">
                                            اصفهان، اصفهان، مرکز رشد و فناوری
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl mt-1 bg-brand-cream/10 p-2 rounded-lg">📞</span>
                                    <div>
                                        <h4 className="font-bold text-brand-cream">شماره تماس</h4>
                                        <p className="text-brand-cream/70 text-sm mt-1 text-left font-medium tracking-wider" dir="ltr">
                                            +98 31 1234 5678
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-2xl mt-1 bg-brand-cream/10 p-2 rounded-lg">✉️</span>
                                    <div>
                                        <h4 className="font-bold text-brand-cream">ایمیل</h4>
                                        <p className="text-brand-cream/70 text-sm mt-1 text-left font-medium" dir="ltr">
                                            info@lyannanozist.com
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* کارت ساعات کاری */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-cream">
                            <h3 className="text-xl font-black text-brand-dark mb-4">ساعات کاری</h3>
                            <div className="space-y-3">
                                <p className="text-brand-dark/70 flex justify-between font-medium border-b border-gray-100 pb-2">
                                    <span>شنبه تا چهارشنبه:</span>
                                    <span className="font-bold text-brand-cyan" dir="ltr">09:00 - 17:00</span>
                                </p>
                                <p className="text-brand-dark/70 flex justify-between font-medium">
                                    <span>پنجشنبه:</span>
                                    <span className="font-bold text-brand-cyan" dir="ltr">09:00 - 13:00</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* بخش نقشه */}
                <div className="mt-20 animate-fade-in-up">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-black text-brand-dark">موقعیت مکانی ما</h2>
                        <p className="text-brand-dark/70 font-medium mt-2">ما را در مرکز رشد و فناوری اصفهان پیدا کنید.</p>
                    </div>
                    <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107645.64558104983!2d51.59222727875058!3d32.65462748573445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc23c897b4ecc3%3A0xc5b0b6c6c3b6b6c6!2sIsfahan%2C%20Isfahan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="موقعیت دفتر لیان نانو زیست"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
}