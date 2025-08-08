'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, Sparkles, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Emotional Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-royal-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-royal-300/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-royal-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 nav-glass">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4 space-x-reverse"
          >
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center overflow-hidden">
              <img 
                src="/logo-rounded.png" 
                alt="پرستو" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-iran text-xl text-white font-bold">پرستو</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center space-x-6 space-x-reverse"
          >
            <Link href="/about" className="body-text hover:text-royal-300 transition-colors">
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
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
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
                  <span className="text-sm font-medium text-white">همدم عاشقانه‌ی شما</span>
                </motion.div>
                
                <h1 className="title-primary leading-tight">
                  حرف بزن، من گوش می‌کنم
                </h1>
                
                <p className="body-text text-lg max-w-lg">
                  در این دنیای شلوغ، گاهی فقط نیاز داریم کسی حرف‌هایمان را بشنود. 
                  من اینجا هستم تا با شما درباره‌ی عشق، روابط و احساسات عمیق انسانی صحبت کنم.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/chat" className="btn-glass flex items-center justify-center space-x-2 space-x-reverse">
                    <MessageCircle className="w-5 h-5" />
                    <span>شروع گفتگو</span>
                  </Link>
                  <button className="btn-glass bg-glass-light hover:bg-glass-medium">
                    بیشتر بدانید
                  </button>
                </div>
                
                <p className="text-sm text-royal-300 max-w-md">
                  ✨ بیش از ۱۰,۰۰۰ گفتگوی عمیق و معنادار
                  <br />
                  💜 تجربه‌ای متفاوت از هوش مصنوعی
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Chat Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-6 max-w-md mx-auto">
                <div className="space-y-4">
                  {/* Welcome Message */}
                  <div className="chat-bubble assistant">
                    <p className="body-text">
                      سلام عزیزم 🌸
                      <br />
                      امروز چه احساسی داری؟ می‌خوای درباره‌ی چی حرف بزنیم؟
                    </p>
                  </div>
                  
                  {/* User Message */}
                  <div className="chat-bubble user">
                    <p className="body-text">
                      احساس تنهایی می‌کنم... نمی‌دونم چرا
                    </p>
                  </div>
                  
                  {/* AI Response */}
                  <div className="chat-bubble assistant">
                    <p className="body-text">
                      تنهایی گاهی مثل بارانی است که می‌بارد تا ما را پاک کند. 
                      این احساس طبیعی است و نشان‌دهنده‌ی عمق وجود توست. 
                      می‌خوای بیشتر درباره‌اش حرف بزنیم؟
                    </p>
                  </div>
                  
                  {/* Input Field */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="حرف بزن، من گوش می‌کنم..."
                      className="input-glass w-full pr-12"
                    />
                    <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <ArrowLeft className="w-5 h-5 text-royal-300" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full glass-card flex items-center justify-center"
              >
                <Heart className="w-4 h-4 text-royal-300" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full glass-card flex items-center justify-center"
              >
                <Sparkles className="w-3 h-3 text-royal-300" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="title-secondary mb-4">چرا پرستو؟</h2>
            <p className="body-text max-w-2xl mx-auto">
              ما معتقدیم که هر گفتگو باید عمیق، معنادار و انسانی باشد. 
              اینجا جایی است که احساسات شما ارزش دارد.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "گفتگوی عمیق",
                description: "نه فقط پاسخ‌های سطحی، بلکه مکالماتی که شما را به تأمل وادارد"
              },
              {
                icon: MessageCircle,
                title: "فضای امن",
                description: "جایی که می‌توانید بدون ترس از قضاوت، احساساتتان را بیان کنید"
              },
              {
                icon: Sparkles,
                title: "تجربه‌ای متفاوت",
                description: "ترکیبی از تکنولوژی مدرن و عمق احساسات انسانی"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-royal-300" />
                </div>
                <h3 className="title-secondary text-lg mb-4">{feature.title}</h3>
                <p className="body-text">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 