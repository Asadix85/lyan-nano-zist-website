import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'کیت‌های تشخیصی باکتریوفاژ',
      description: 'طراحی و توسعه کیت‌های نوین تشخیصی بر پایه باکتریوفاژ برای شناسایی سریع و دقیق آلودگی‌ها.',
      icon: '🧬'
    },
    {
      title: 'ایمنی صنایع غذایی',
      description: 'ارائه راهکارهای نوآورانه برای تضمین ایمنی و کیفیت محصولات در صنایع غذایی.',
      icon: '🥗'
    },
    {
      title: 'سلامت دام و دامداری',
      description: 'تشخیص دقیق بیماری‌ها و آلودگی‌ها در دامداری‌ها برای ارتقای سلامت دام و افزایش بهره‌وری.',
      icon: '🐄'
    },
  ];

  return (
      <div className="flex flex-col overflow-hidden bg-brand-cream">

        {/* بخش هیرو */}
        <section className="container mx-auto px-6 py-20 lg:py-32 flex flex-col-reverse md:flex-row items-center gap-12 relative">
          <div className="flex-1 space-y-8 text-center md:text-right animate-fade-in-up z-10">
            <div className="inline-block bg-brand-gold/30 text-brand-dark px-4 py-1.5 rounded-full text-sm font-bold mb-2 border border-brand-gold">
              🔬 زیست‌فناوری و نانوتکنولوژی
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-brand-dark">
              لیان <span className="text-brand-cyan">نانو زیست</span> <br />
              ایمنی را به ارمغان می‌آورد
            </h2>
            <p className="text-lg text-brand-dark/80 leading-relaxed max-w-xl mx-auto md:mx-0 font-medium">
              لیان نانو زیست، ارائه‌دهنده راهکارهای نوآورانه برای حفظ ایمنی صنایع غذایی و دارویی. ما با طراحی کیت‌های تشخیصی بر پایه باکتریوفاژ، تشخیصی دقیق و سریع را برای سلامت جامعه به ارمغان می‌آوریم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link href="/services" className="bg-brand-cyan text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-dark transition duration-300 shadow-xl shadow-brand-cyan/20">
                خدمات ما
              </Link>
              <Link href="/contact" className="bg-transparent text-brand-dark border-2 border-brand-dark px-8 py-4 rounded-xl font-bold hover:bg-brand-dark hover:text-brand-cream transition duration-300">
                تماس با ما
              </Link>
            </div>
          </div>

          {/* المان گرافیکی */}
          <div className="flex-1 w-full max-w-lg animate-fade-in-up animation-delay-200 flex justify-center relative">
            <div className="absolute inset-0 bg-brand-gold rounded-full blur-3xl opacity-30 scale-75"></div>
            <div className="w-72 h-72 md:w-96 md:h-96 bg-brand-dark rounded-[3rem] shadow-2xl flex items-center justify-center relative z-10 transform rotate-6 hover:rotate-0 transition duration-500 border-4 border-brand-cyan/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-transparent"></div>
              <span className="text-brand-cream font-black text-7xl md:text-9xl tracking-tighter">LYAN</span>
            </div>
          </div>
        </section>

        {/* بخش خدمات */}
        <section className="bg-white py-24 relative z-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,51,51,0.05)]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">حوزه‌های تخصصی ما</h3>
              <div className="w-24 h-2 bg-brand-cyan mx-auto rounded-full mb-6"></div>
              <p className="text-brand-dark/70 max-w-2xl mx-auto text-lg font-medium">
                ما با تمرکز بر زیست‌فناوری و نانوتکنولوژی، راهکارهای تشخیصی پیشرفته‌ای را برای صنایع غذایی و دامداری ارائه می‌دهیم.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                  <div
                      key={index}
                      className="bg-brand-cream/30 p-8 rounded-3xl border border-brand-cream hover:border-brand-cyan hover:shadow-2xl hover:shadow-brand-cyan/10 hover:-translate-y-2 transition duration-300 group animate-fade-in-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="text-5xl mb-6 bg-white w-20 h-20 flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-brand-cyan group-hover:text-white transition duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h4>
                    <p className="text-brand-dark/70 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* بخش چرا ما */}
        <section className="py-24 bg-brand-dark text-brand-cream relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-cyan opacity-10 rounded-full -ml-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full -mr-20 -mb-20 blur-3xl"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-black text-brand-gold mb-4">چرا لیان نانو زیست؟</h3>
              <div className="w-20 h-2 bg-brand-cyan mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-brand-cyan/20 rounded-3xl flex items-center justify-center mx-auto text-4xl border border-brand-cyan/30">🔬</div>
                <h4 className="text-xl font-bold text-brand-cream">دقت علمی بالا</h4>
                <p className="text-brand-cream/70 text-sm leading-relaxed font-medium">استفاده از جدیدترین متدهای نانوتکنولوژی و زیست‌فناوری برای ارائه نتایج دقیق و قابل اعتماد.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-brand-gold/20 rounded-3xl flex items-center justify-center mx-auto text-4xl border border-brand-gold/30">⚡</div>
                <h4 className="text-xl font-bold text-brand-cream">سرعت در تشخیص</h4>
                <p className="text-brand-cream/70 text-sm leading-relaxed font-medium">کیت‌های تشخیصی ما به گونه‌ای طراحی شده‌اند که در کمترین زمان ممکن، پاسخ مورد نیاز شما را ارائه دهند.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-brand-cream/10 rounded-3xl flex items-center justify-center mx-auto text-4xl border border-brand-cream/20">🤝</div>
                <h4 className="text-xl font-bold text-brand-cream">تعهد به سلامت</h4>
                <p className="text-brand-cream/70 text-sm leading-relaxed font-medium">مأموریت اصلی ما ارتقای ایمنی صنایع غذایی و دامداری برای حفظ سلامت کل جامعه است.</p>
              </div>
            </div>
          </div>
        </section>

        {/* بخش تیم */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">تیم متخصص ما</h3>
              <div className="w-20 h-2 bg-brand-cyan mx-auto rounded-full mb-6"></div>
              <p className="text-brand-dark/70 max-w-2xl mx-auto font-medium">
                ما متشکل از پژوهشگران و متخصصانی هستیم که با پشتکار و تعهد، آینده‌ای سالم‌تر را رقم می‌زنیم.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* کارت عضو تیم ۱ */}
              <div className="bg-brand-cream/30 rounded-3xl p-6 text-center border border-brand-cream hover:border-brand-cyan transition group">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold">عکس</div>
                </div>
                <h4 className="text-xl font-bold text-brand-dark">دکتر ...</h4>
                <p className="text-brand-cyan font-bold text-sm mt-1">مدیرعامل و بنیان‌گذار</p>
                <p className="text-gray-500 text-sm mt-3">متخصص زیست‌فناوری با بیش از ۱۰ سال سابقه پژوهش.</p>
              </div>

              {/* کارت عضو تیم ۲ */}
              <div className="bg-brand-cream/30 rounded-3xl p-6 text-center border border-brand-cream hover:border-brand-cyan transition group">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold">عکس</div>
                </div>
                <h4 className="text-xl font-bold text-brand-dark">مهندس ...</h4>
                <p className="text-brand-cyan font-bold text-sm mt-1">مدیر فنی</p>
                <p className="text-gray-500 text-sm mt-3">متخصص نانوتکنولوژی و توسعه کیت‌های تشخیصی.</p>
              </div>

              {/* کارت عضو تیم ۳ */}
              <div className="bg-brand-cream/30 rounded-3xl p-6 text-center border border-brand-cream hover:border-brand-cyan transition group">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold">عکس</div>
                </div>
                <h4 className="text-xl font-bold text-brand-dark">خانم ...</h4>
                <p className="text-brand-cyan font-bold text-sm mt-1">مدیر پژوهش و توسعه</p>
                <p className="text-gray-500 text-sm mt-3">مسئول طراحی و اعتبارسنجی کیت‌های تشخیصی باکتریوفاژ.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}