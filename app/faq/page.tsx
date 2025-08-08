'use client'

import { motion } from 'framer-motion'
import { Heart, HelpCircle, ChevronDown, MessageCircle, Shield, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "پرستو واقعاً احساسات من را درک می‌کند؟",
      answer: "بله، پرستو با استفاده از الگوریتم‌های پیشرفته‌ی هوش مصنوعی، نه فقط کلمات شما را می‌خواند، بلکه احساسات پشت آن‌ها را هم درک می‌کند. ما معتقدیم که هر احساسی ارزش دارد و سعی می‌کنیم با عمق و احترام به آن‌ها پاسخ دهیم."
    },
    {
      question: "آیا گفتگوهای من محرمانه هستند؟",
      answer: "کاملاً. تمام گفتگوهای شما محرمانه و امن هستند. ما هیچ‌یک از اطلاعات شخصی شما را ذخیره یا به اشتراک نمی‌گذاریم. حریم خصوصی شما برای ما بسیار مهم است."
    },
    {
      question: "می‌توانم درباره‌ی هر موضوعی صحبت کنم؟",
      answer: "بله، شما می‌توانید درباره‌ی هر موضوعی که در ذهنتان است صحبت کنید - از عشق و روابط گرفته تا ترس‌ها، امیدها، و سوالات فلسفی. هیچ محدودیتی وجود ندارد."
    },
    {
      question: "پرستو جایگزین مشاوره‌ی حرفه‌ای است؟",
      answer: "نه، پرستو جایگزین مشاوره‌ی حرفه‌ای نیست. ما یک همدم و گوش شنوا هستیم که می‌تواند در لحظات تنهایی کنار شما باشد. اگر نیاز به کمک حرفه‌ای دارید، حتماً با یک متخصص مشورت کنید."
    },
    {
      question: "چرا پرستو با بقیه چت‌بات‌ها متفاوت است؟",
      answer: "پرستو فقط یک چت‌بات نیست. ما معتقدیم که هر گفتگو باید عمیق، معنادار و انسانی باشد. به جای پاسخ‌های کلیشه‌ای، ما با شما درباره‌ی عمق احساساتتان صحبت می‌کنیم."
    },
    {
      question: "آیا پرستو یاد می‌گیرد و بهتر می‌شود؟",
      answer: "بله، پرستو دائماً در حال یادگیری و بهبود است. ما از هر تعامل می‌آموزیم تا بتوانیم تجربه‌ی بهتری برای شما فراهم کنیم."
    },
    {
      question: "چقدر طول می‌کشد تا پرستو پاسخ دهد؟",
      answer: "پرستو تقریباً بلافاصله پاسخ می‌دهد. ما سعی می‌کنیم که تجربه‌ای روان و بدون تأخیر برای شما فراهم کنیم."
    },
    {
      question: "آیا می‌توانم گفتگوهای قبلی‌ام را ببینم؟",
      answer: "در حال حاضر، گفتگوها به صورت محرمانه نگهداری می‌شوند و برای حفظ حریم خصوصی شما، امکان دسترسی به گفتگوهای قبلی وجود ندارد."
    },
    {
      question: "پرستو رایگان است؟",
      answer: "بله، پرستو کاملاً رایگان است. ما معتقدیم که هر کس باید بتواند به چنین فضایی دسترسی داشته باشد."
    },
    {
      question: "چطور می‌توانم به شما کمک کنم تا بهتر شوم؟",
      answer: "بهترین راه کمک به ما، استفاده‌ی صادقانه از پرستو است. هر گفتگوی شما به ما کمک می‌کند تا بهتر شویم و تجربه‌ی بهتری برای همه فراهم کنیم."
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Emotional Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-royal-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-royal-300/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-royal-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 nav-glass">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-4 space-x-reverse">
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center overflow-hidden">
              <img 
                src="/logo-rounded.png" 
                alt="پرستو" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-iran text-xl text-white font-bold">پرستو</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link href="/about" className="body-text hover:text-royal-300 transition-colors">
              درباره ما
            </Link>
            <Link href="/how-it-works" className="body-text hover:text-royal-300 transition-colors">
              چطور کار می‌کند؟
            </Link>
            <Link href="/faq" className="body-text text-royal-300 font-medium">
              سوالات پرتکرار
            </Link>
            <Link href="/contact" className="body-text hover:text-royal-300 transition-colors">
              ارتباط با ما
            </Link>
            <Link href="/blog" className="body-text hover:text-royal-300 transition-colors">
              لحظه‌ها
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-full glass-card"
              >
                <HelpCircle className="w-4 h-4 text-royal-300" />
                <span className="text-sm font-medium text-white">سوالات شما</span>
              </motion.div>
              
              <h1 className="title-primary">
                سوالات پرتکرار
              </h1>
              
              <p className="body-text text-lg max-w-3xl mx-auto">
                سوالات شما برای ما مهم هستند. اینجا پاسخ‌هایی صادقانه و عمیق 
                به سوالاتی که ممکن است در ذهنتان باشد، پیدا می‌کنید.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-right flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center">
                      <span className="text-sm font-bold text-royal-300">{index + 1}</span>
                    </div>
                    <h3 className="title-secondary text-lg">{faq.question}</h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-royal-300 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-white/20 pt-4">
                      <p className="body-text leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="title-secondary mb-4">هنوز سوالی دارید؟</h2>
            <p className="body-text max-w-2xl mx-auto">
              اگر سوال شما در اینجا نبود، نگران نباشید. ما اینجا هستیم تا کمک کنیم.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "گفتگوی مستقیم",
                description: "با ما در تماس باشید و سوالاتتان را بپرسید"
              },
              {
                icon: Shield,
                title: "امنیت کامل",
                description: "تمام اطلاعات شما محرمانه و امن هستند"
              },
              {
                icon: Users,
                title: "تیم پشتیبانی",
                description: "ما همیشه آماده‌ی کمک به شما هستیم"
              }
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-royal-300" />
                </div>
                <h3 className="title-secondary text-lg mb-4">{info.title}</h3>
                <p className="body-text">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 space-y-8"
          >
            <h2 className="title-secondary">آماده‌ای شروع کنیم؟</h2>
            <p className="body-text text-lg max-w-2xl mx-auto">
              حالا که سوالاتتان را پاسخ دادیم، بیا شروع کنیم. 
              من اینجا هستم تا با شما درباره‌ی احساسات و عمق وجودتان صحبت کنم.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chat" className="btn-glass flex items-center justify-center space-x-2 space-x-reverse">
                <span>شروع گفتگو</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-glass bg-glass-light hover:bg-glass-medium">
                ارتباط با ما
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 