import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'تماس با ما',
    description: 'راه‌های ارتباط با تیم پشتیبانی و مشاوره لیان نانو زیست.',
};

export default function ContactLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}