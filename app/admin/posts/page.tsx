'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function AdminPosts() {
    const [posts, setPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const [newPost, setNewPost] = useState({ title: '', slug: '', excerpt: '', content: '', published: true });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) router.push('/login');
            else {
                fetchPosts();
            }
        };
        checkUser();
    }, [router]);

    const fetchPosts = async () => {
        const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
        if (data) setPosts(data);
        setIsLoading(false);
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const { error } = await supabase.from('posts').insert([newPost]);
        if (!error) {
            setNewPost({ title: '', slug: '', excerpt: '', content: '', published: true });
            fetchPosts();
        } else {
            alert('خطا در ساخت مقاله. احتمالاً نامک (slug) تکراری است.');
        }
        setIsSubmitting(false);
    };

    const handleDelete = async (id: number) => {
        if (confirm('آیا از حذف این مقاله مطمئن هستید؟')) {
            await supabase.from('posts').delete().eq('id', id);
            fetchPosts();
        }
    };

    if (isLoading) return <div className="text-center py-20 font-bold">در حال بارگذاری...</div>;

    return (
        <div className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-2xl font-black text-brand-dark">مدیریت مقالات</h1>
                    <div className="flex gap-3">
                        <Link href="/admin" className="bg-gray-100 text-brand-dark px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition">بازگشت</Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* فرم ساخت مقاله */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
                        <h2 className="text-xl font-bold text-brand-dark mb-4">مقاله جدید</h2>
                        <form onSubmit={handleCreate} className="space-y-4">
                            <input required type="text" placeholder="عنوان مقاله" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-brand-cyan" />
                            <input required type="text" placeholder="نامک (مثلاً: my-new-post)" value={newPost.slug} onChange={e => setNewPost({...newPost, slug: e.target.value})} className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-brand-cyan text-left" dir="ltr" />
                            <textarea required placeholder="خلاصه مقاله" value={newPost.excerpt} onChange={e => setNewPost({...newPost, excerpt: e.target.value})} rows={2} className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-brand-cyan"></textarea>
                            <textarea required placeholder="متن کامل مقاله" value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} rows={6} className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-brand-cyan"></textarea>
                            <button disabled={isSubmitting} type="submit" className="w-full bg-brand-cyan text-white font-bold py-3 rounded-lg hover:bg-brand-dark transition">
                                {isSubmitting ? 'در حال ذخیره...' : 'انتشار مقاله'}
                            </button>
                        </form>
                    </div>

                    {/* لیست مقالات */}
                    <div className="lg:col-span-2 space-y-4">
                        {posts.map(post => (
                            <div key={post.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-brand-dark">{post.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1" dir="ltr">{post.slug}</p>
                                </div>
                                <div className="flex gap-3">
                                    <a href={`/blog/${post.slug}`} target="_blank" className="text-brand-cyan text-sm font-bold hover:underline">مشاهده</a>
                                    <button onClick={() => handleDelete(post.id)} className="text-red-500 text-sm font-bold hover:underline">حذف</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}