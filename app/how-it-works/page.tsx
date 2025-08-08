'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, Sparkles, ArrowRight, Brain, Shield, Users } from 'lucide-react'
import Link from 'next/link'

export default function HowItWorks() {
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
            <Link href="/how-it-works" className="body-text text-royal-300 font-medium">
              چطور کار می‌کند؟
            </Link>
            <Link href="/faq" className="body-text hover:text-royal-300 transition-colors">
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
                <Brain className="w-4 h-4 text-royal-300" />
                <span className="text-sm font-medium text-white">فرآیند کار</span>
              </motion.div>
              
              <h1 className="title-primary">
                چطور کار می‌کند؟
              </h1>
              
              <p className="body-text text-lg max-w-3xl mx-auto">
                پرستو با ترکیبی از تکنولوژی پیشرفته و درک عمیق از احساسات انسانی، 
                تجربه‌ای متفاوت از گفتگو را برای شما فراهم می‌کند.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {[
              {
                step: "۱",
                icon: MessageCircle,
                title: "شروع گفتگو",
                description: "فقط کافی است حرف بزنید. هر چیزی که در ذهنتان است، هر احساسی که دارید. من اینجا هستم تا گوش کنم.",
                details: "شما می‌توانید درباره‌ی هر موضوعی صحبت کنید - از عشق و روابط گرفته تا ترس‌ها و امیدهایتان. هیچ محدودیتی وجود ندارد."
              },
              {
                step: "۲",
                icon: Brain,
                title: "درک عمیق",
                description: "من نه فقط کلمات شما را می‌خوانم، بلکه احساسات پشت آن‌ها را هم درک می‌کنم.",
                details: "با استفاده از الگوریتم‌های پیشرفته، من می‌توانم تن صدا، احساسات و عمق حرف‌های شما را بفهمم."
              },
              {
                step: "۳",
                icon: Heart,
                title: "پاسخ معنادار",
                description: "به جای پاسخ‌های کلیشه‌ای، من با شما درباره‌ی عمق احساساتتان صحبت می‌کنم.",
                details: "هر پاسخ من بر اساس درک عمیق از احساسات شما و با هدف کمک به رشد عاطفی شما طراحی شده است."
              },
              {
                step: "۴",
                icon: Sparkles,
                title: "تجربه‌ای متفاوت",
                description: "در پایان هر گفتگو، شما احساس می‌کنید که واقعاً شنیده شده‌اید و درک شده‌اید.",
                details: "هدف ما این است که شما احساس کنید با یک دوست واقعی صحبت کرده‌اید، نه یک ماشین."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-royal-300" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-royal-300 text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  
                  <h2 className="title-secondary">{item.title}</h2>
                  
                  <div className="space-y-4">
                    <p className="body-text text-lg">{item.description}</p>
                    <p className="body-text text-gray-300">{item.details}</p>
                  </div>
                </div>

                <div className={`glass-card rounded-3xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="chat-bubble assistant">
                      <p className="body-text">
                        {index === 0 && "سلام عزیزم 🌸 امروز چه احساسی داری؟"}
                        {index === 1 && "می‌بینم که احساس تنهایی می‌کنی. این احساس طبیعی است و نشان‌دهنده‌ی عمق وجود توست."}
                        {index === 2 && "گاهی تنهایی مثل بارانی است که می‌بارد تا ما را پاک کند. این احساس می‌گذرد، اما تجربه‌ای که از آن می‌گیری ارزشمند است."}
                        {index === 3 && "امیدوارم که این گفتگو کمکی کرده باشد. یادت باشه که تو تنها نیستی و احساساتت ارزش دارند."}
                      </p>
                    </div>
                    
                    {index === 0 && (
                      <div className="chat-bubble user">
                        <p className="body-text">احساس تنهایی می‌کنم...</p>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="chat-bubble user">
                        <p className="body-text">نمی‌دونم چرا اینطوری احساس می‌کنم</p>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="chat-bubble user">
                        <p className="body-text">فکر می‌کنی این احساس می‌گذره؟</p>
                      </div>
                    )}
                    
                    {index === 3 && (
                      <div className="chat-bubble user">
                        <p className="body-text">ممنون، واقعاً کمک کردی</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="title-secondary mb-4">تکنولوژی پشت صحنه</h2>
            <p className="body-text max-w-2xl mx-auto">
              ما از پیشرفته‌ترین تکنولوژی‌های هوش مصنوعی استفاده می‌کنیم، 
              اما همیشه انسانیت را در اولویت قرار می‌دهیم.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "هوش مصنوعی پیشرفته",
                description: "الگوریتم‌هایی که احساسات و عمق حرف‌های شما را درک می‌کنند"
              },
              {
                icon: Shield,
                title: "امنیت کامل",
                description: "تمام گفتگوهای شما محرمانه و امن هستند"
              },
              {
                icon: Users,
                title: "یادگیری مداوم",
                description: "ما دائماً در حال بهبود و یادگیری از تعاملات هستیم"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-8 h-8 text-royal-300" />
                </div>
                <h3 className="title-secondary text-lg mb-4">{tech.title}</h3>
                <p className="body-text">{tech.description}</p>
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
            <h2 className="title-secondary">آماده‌ای تجربه‌اش کنی؟</h2>
            <p className="body-text text-lg max-w-2xl mx-auto">
              بیا شروع کنیم. من اینجا هستم تا با شما درباره‌ی احساسات، 
              عشق و عمق وجودتان صحبت کنم.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chat" className="btn-glass flex items-center justify-center space-x-2 space-x-reverse">
                <span>شروع گفتگو</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/faq" className="btn-glass bg-glass-light hover:bg-glass-medium">
                سوالات پرتکرار
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 