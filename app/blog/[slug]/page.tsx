import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { cacheLife } from 'next/cache';

async function getPost(slug: string) {
    'use cache';
    cacheLife('minutes');
    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();
    return post;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getPost(params.slug);
    if (!post) return { title: 'مقاله یافت نشد' };
    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);

    if (!post) notFound();

    return (
        <div className="bg-brand-cream min-h-screen pb-20">
            <div className="bg-brand-dark text-brand-cream py-16">
                <div className="container mx-auto px-6 max-w-3xl">
                    <Link href="/blog" className="text-brand-cyan font-bold mb-6 inline-block hover:text-brand-gold transition">
                        → بازگشت به مقالات
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">{post.title}</h1>
                    <div className="flex items-center gap-4 text-brand-cream/60 text-sm font-medium">
                        <span>تاریخ انتشار: {new Date(post.created_at).toLocaleDateString('fa-IR')}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-3xl -mt-8">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-brand-cream">
                    {post.cover_image && (
                        <img src={post.cover_image} alt={post.title} className="w-full h-auto rounded-2xl mb-8" />
                    )}
                    <div className="prose prose-lg max-w-none text-brand-dark/80 font-medium leading-loose">
                        {post.content.split('\n').map((paragraph: string, idx: number) => (
                            <p key={idx} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}