# لیان نانو زیست | Lyan Nano Zist

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase)

**وب‌سایت رسمی شرکت دانش‌بنیان لیان نانو زیست**  
**Official Corporate Website of Lyan Nano Zist**

</div>

---

## 🇮🇷 درباره پروژه (فارسی)

این پروژه، وب‌سایت رسمی **شرکت دانش‌بنیان لیان نانو زیست** است که در حوزه زیست‌فناوری و نانوتکنولوژی فعالیت می‌کند. این شرکت با تمرکز بر طراحی و توسعه **کیت‌های نوین تشخیصی بر پایه باکتریوفاژ**، راهکارهای دقیق و سریعی برای صنایع غذایی و دامداری ارائه می‌دهد.

### ✨ امکانات

- 🎨 **طراحی مدرن و ریسپانسیو** با استفاده از Tailwind CSS
- 🌐 **پشتیبانی کامل از زبان فارسی (RTL)** و فونت وزیرمتن
- 📝 **سیستم وبلاگ و اخبار** با اتصال به دیتابیس Supabase
- 📬 **فرم تماس با ما** متصل به دیتابیس برای دریافت پیام‌ها
- 🔐 **پنل مدیریت امن** با سیستم احراز هویت Supabase
- 🗺️ **نقشه موقعیت مکانی** و اطلاعات تماس
- 🔍 **بهینه‌سازی سئو (SEO)** با متادیتای اختصاصی برای هر صفحه
- 📱 **طراحی کاملاً واکنش‌گرا (Responsive)** برای موبایل و دسکتاپ

### 🛠️ تکنولوژی‌های استفاده شده

| تکنولوژی | توضیحات |
| :--- | :--- |
| **Next.js 16** | فریم‌ورک React برای رندر سمت سرور (App Router) |
| **TypeScript** | زبان برنامه‌نویسی با تایپ‌های قوی |
| **Tailwind CSS 4** | فریم‌ورک CSS برای استایل‌دهی سریع |
| **Supabase** | دیتابیس و سیستم احراز هویت |
| **Vazirmatn Font** | فونت فارسی زیبا و خوانا |

### 🚀 نصب و اجرا

```bash
# 1. کلون کردن ریپازیتوری
git clone https://github.com/YOUR_USERNAME/lyan-nano-zist-website.git

# 2. رفتن به پوشه پروژه
cd lyan-nano-zist-website

# 3. نصب پکیج‌ها
npm install

# 4. ساخت فایل .env.local و قرار دادن کلیدهای Supabase
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# 5. اجرای پروژه
npm run dev
```
### 📁 ساختار پروژه
```
lyan-nano-zist-website/
├── app/
│   ├── about/          # صفحه درباره ما
│   ├── admin/          # پنل مدیریت
│   ├── blog/           # وبلاگ و مقالات
│   ├── contact/        # صفحه تماس با ما
│   ├── login/          # صفحه ورود ادمین
│   ├── products/       # صفحه محصولات
│   ├── services/       # صفحه خدمات
│   ├── components/     # کامپوننت‌های مشترک (هدر، فوتر)
│   ├── globals.css     # استایل‌های سراسری و رنگ‌های برند
│   └── layout.tsx      # قالب اصلی سایت
├── lib/                # تنظیمات Supabase
├── public/             # فایل‌های استاتیک (لوگو، تصاویر)
└── ...
```
# 🇬🇧 About The Project (English)
This is the official corporate website for Lyan Nano Zist, a knowledge-based company operating in the fields of biotechnology and nanotechnology. The company focuses on designing and developing bacteriophage-based diagnostic kits, providing accurate and rapid solutions for the food and veterinary industries.

### ✨ Features
🎨 Modern & Responsive Design using Tailwind CSS

🌐 Full Persian (RTL) Support with Vazirmatn font

📝 Blog & News System integrated with Supabase

📬 Contact Form connected to the database

🔐 Secure Admin Panel with Supabase Authentication

🗺️ Location Map and contact information

🔍 SEO Optimized with per-page metadata

📱 Fully Responsive for mobile and desktop

### 🛠️ Tech Stack
Technology	Description
Next.js 16	React framework for server-side rendering (App Router)
TypeScript	Strongly typed programming language
Tailwind CSS 4	Utility-first CSS framework
Supabase	Database and Authentication
Vazirmatn Font	Beautiful and readable Persian font
### 🚀 Getting Started
bash
#### 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/lyan-nano-zist-website.git

#### 2. Navigate to the project directory
cd lyan-nano-zist-website

#### 3. Install dependencies
npm install

#### 4. Create a .env.local file and add your Supabase keys
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

#### 5. Run the development server
npm run dev
### 📁 Project Structure
```
lyan-nano-zist-website/
├── app/
│   ├── about/          # About Us page
│   ├── admin/          # Admin Dashboard
│   ├── blog/           # Blog & Articles
│   ├── contact/        # Contact Us page
│   ├── login/          # Admin Login page
│   ├── products/       # Products page
│   ├── services/       # Services page
│   ├── components/     # Shared components (Header, Footer)
│   ├── globals.css     # Global styles & brand colors
│   └── layout.tsx      # Root layout
├── lib/                # Supabase configuration
├── public/             # Static assets (Logo, Images)
└── ...
```
### 📞 Contact
Website: lyannanozist.com

Email: info@lyannanozist.com

Location: Isfahan, Iran

### 📄 License
This project is proprietary and developed exclusively for Lyan Nano Zist.
---
