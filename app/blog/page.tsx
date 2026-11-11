import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import type { Metadata } from 'next';
import { cacheLife } from 'next/cache';

export const metadata: Metadata = {
    title: 'اخبار و مقالات',
    description: 'جدیدترین مقالات و اخبار لیان نانو زیست در حوزه زیست‌فناوری و کیت‌های تشخیصی.',
};

// تابع کش‌شده برای دریافت مقالات
async function getPosts() {
    'use cache';
    cacheLife('minutes'); // داده‌ها هر چند دقیقه یکبار به‌روز می‌شوند (معادل revalidate)

    const { data: posts } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

    return posts;
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="bg-brand-cream min-h-screen">
            <section className="bg-brand-dark text-brand-cream py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">اخبار و مقالات</h1>
                    <div className="w-24 h-2 bg-brand-gold mx-auto rounded-full mb-6"></div>
                    <p className="text-brand-cream/80 max-w-2xl mx-auto text-lg font-medium">
                        تازه‌ترین دستاوردها و مقالات علمی تیم لیان نانو زیست.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                {!posts || posts.length === 0 ? (
                    <p className="text-center text-brand-dark/70 font-bold text-xl">هنوز مقاله‌ای منتشر نشده است.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="bg-white rounded-3xl p-6 shadow-sm border border-brand-cream hover:shadow-xl hover:-translate-y-2 transition duration-300 group flex flex-col">
                                <div className="w-full h-48 bg-brand-cream/50 rounded-2xl mb-6 flex items-center justify-center text-brand-cyan">
                                    {post.cover_image ? (
                                        <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover rounded-2xl" />
                                    ) : (
                                        <span className="text-5xl">📄</span>
                                    )}
                                </div>
                                <h2 className="text-xl font-black text-brand-dark mb-3 group-hover:text-brand-cyan transition">{post.title}</h2>
                                <p className="text-brand-dark/70 text-sm font-medium leading-relaxed mb-4 flex-grow">{post.excerpt}</p>
                                <span className="text-brand-cyan font-bold text-sm mt-auto flex items-center gap-1">
                  ادامه مطلب <span>←</span>
                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}