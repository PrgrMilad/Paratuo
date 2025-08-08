'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, MessageCircle, MapPin, Phone, Send, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            <Link href="/faq" className="body-text hover:text-royal-300 transition-colors">
              سوالات پرتکرار
            </Link>
            <Link href="/contact" className="body-text text-royal-300 font-medium">
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
                <Mail className="w-4 h-4 text-royal-300" />
                <span className="text-sm font-medium text-white">ارتباط با ما</span>
              </motion.div>
              
              <h1 className="title-primary">
                با ما در تماس باشید
              </h1>
              
              <p className="body-text text-lg max-w-3xl mx-auto">
                ما اینجا هستیم تا به سوالات شما پاسخ دهیم، پیشنهاداتتان را بشنویم، 
                و در هر زمینه‌ای که نیاز دارید کمک کنیم.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8"
            >
              <h2 className="title-secondary mb-8">پیام بفرستید</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      نام شما
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-glass w-full"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-glass w-full"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    موضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-glass w-full"
                    placeholder="موضوع پیام خود را وارد کنید"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    پیام شما
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-glass w-full resize-none"
                    placeholder="پیام خود را اینجا بنویسید..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-glass w-full flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Send className="w-5 h-5" />
                  <span>ارسال پیام</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="title-secondary">اطلاعات تماس</h2>
                
                <p className="body-text text-lg">
                  ما همیشه آماده‌ی شنیدن صدای شما هستیم. 
                  هر سوال، پیشنهاد یا نظری که دارید، با ما در میان بگذارید.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "ایمیل",
                    info: "info@parastuo.com",
                    description: "برای سوالات عمومی و پشتیبانی"
                  },
                  {
                    icon: MessageCircle,
                    title: "پیام مستقیم",
                    info: "از طریق فرم کناری",
                    description: "برای پیام‌های طولانی و مفصل"
                  },
                  {
                    icon: MapPin,
                    title: "آدرس",
                    info: "ایران، تهران",
                    description: "دفتر مرکزی ما"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 space-x-reverse"
                  >
                    <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-royal-300" />
                    </div>
                    <div>
                      <h3 className="title-secondary text-lg mb-1">{contact.title}</h3>
                      <p className="body-text font-medium text-royal-300 mb-1">{contact.info}</p>
                      <p className="body-text text-sm text-gray-300">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="title-secondary text-lg mb-4">ساعات پاسخگویی</h3>
                <div className="space-y-2 body-text">
                  <p>شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر</p>
                  <p>پنجشنبه: ۹ صبح تا ۱ ظهر</p>
                  <p>جمعه: تعطیل</p>
                </div>
                <p className="body-text text-sm text-gray-300 mt-4">
                  * برای موارد اضطراری، همیشه می‌توانید از طریق ایمیل با ما در تماس باشید.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 space-y-8"
          >
            <h2 className="title-secondary">سوالات پرتکرار</h2>
            <p className="body-text text-lg max-w-2xl mx-auto">
              شاید پاسخ سوال شما در بخش سوالات پرتکرار ما باشد. 
              قبل از ارسال پیام، نگاهی به آن بیندازید.
            </p>
            
            <Link href="/faq" className="btn-glass bg-glass-light hover:bg-glass-medium inline-flex items-center space-x-2 space-x-reverse">
              <span>مشاهده سوالات پرتکرار</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
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
              حالا که با ما آشنا شدید، بیا شروع کنیم. 
              من اینجا هستم تا با شما درباره‌ی احساسات و عمق وجودتان صحبت کنم.
            </p>
            
            <Link href="/chat" className="btn-glass inline-flex items-center space-x-2 space-x-reverse">
              <span>شروع گفتگو</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 