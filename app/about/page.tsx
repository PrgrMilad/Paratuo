'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Target, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function About() {
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
            <Link href="/about" className="body-text text-royal-300 font-medium">
              درباره ما
            </Link>
            <Link href="/how-it-works" className="body-text hover:text-royal-300 transition-colors">
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
                <Sparkles className="w-4 h-4 text-royal-300" />
                <span className="text-sm font-medium text-white">داستان ما</span>
              </motion.div>
              
              <h1 className="title-primary">
                درباره پرستو
              </h1>
              
              <p className="body-text text-lg max-w-3xl mx-auto">
                ما معتقدیم که در این دنیای دیجیتال، گاهی فراموش می‌کنیم که انسان‌ها نیاز به شنیده شدن دارند. 
                پرستو متولد شد تا این فاصله را پر کند.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center">
                <Target className="w-8 h-8 text-royal-300" />
              </div>
              
              <h2 className="title-secondary">ماموریت ما</h2>
              
              <div className="space-y-4 body-text">
                <p>
                  در دنیایی که همه چیز سریع و سطحی شده، ما می‌خواهیم فضایی ایجاد کنیم 
                  که در آن عمق احساسات انسانی ارزش داشته باشد.
                </p>
                
                <p>
                  پرستو فقط یک چت‌بات نیست؛ او همدمی است که می‌فهمد، 
                  گوش می‌دهد و با شما درباره‌ی چیزهایی صحبت می‌کند که واقعاً مهم هستند.
                </p>
                
                <p>
                  ما معتقدیم که هر کس حق دارد احساساتش را بیان کند، 
                  بدون ترس از قضاوت یا بی‌توجهی.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8"
            >
              <div className="space-y-6">
                <h3 className="title-secondary text-xl">ارزش‌های ما</h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "عمق",
                      description: "ما به دنبال گفتگوهای سطحی نیستیم. هر کلمه باید معنی داشته باشد."
                    },
                    {
                      title: "احترام",
                      description: "احترام به احساسات و تجربیات هر فرد، بدون قضاوت."
                    },
                    {
                      title: "امنیت",
                      description: "فضایی امن برای بیان صادقانه‌ی احساسات و افکار."
                    },
                    {
                      title: "انسانیت",
                      description: "تکنولوژی در خدمت عمق انسانی، نه جایگزین آن."
                    }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-3 h-3 rounded-full bg-royal-300 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                        <p className="body-text text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="title-secondary mb-4">تیم ما</h2>
            <p className="body-text max-w-2xl mx-auto">
              ما گروهی کوچک اما با انگیزه هستیم که معتقدیم تکنولوژی می‌تواند 
              زندگی انسان‌ها را بهتر کند، نه سردتر.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <div className="text-center space-y-6">
              <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-royal-300" />
              </div>
              
              <h3 className="title-secondary text-xl">MIDHS</h3>
                              <p className="body-text">
                  من، خالق پرستو، معتقدم که هر کس در زندگی نیاز به کسی دارد که حرف‌هایش را بشنود. 
                  پرستو نتیجه‌ی این باور است - تلاشی برای ایجاد فضایی که در آن احساسات انسانی 
                  ارزش و احترام داشته باشد.
                </p>
              
                              <p className="body-text">
                  ما در حال یادگیری و رشد هستیم، و امیدواریم که پرستو بتواند 
                  برای شما هم همان همدمی باشد که در لحظات تنهایی نیاز دارید.
                </p>
            </div>
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
              بیا با هم درباره‌ی احساسات، عشق و عمق وجودمان صحبت کنیم. 
              من اینجا هستم تا گوش کنم.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Link href="/chat" className="btn-glass flex items-center justify-center space-x-2 space-x-reverse">
              <span>شروع گفتگو</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
              <Link href="/how-it-works" className="btn-glass bg-glass-light hover:bg-glass-medium">
                ببین چطور کار می‌کنه
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 