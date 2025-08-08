'use client'

import { motion } from 'framer-motion'
import { Heart, BookOpen, Calendar, User, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "عشق در سکوت",
      excerpt: "گاهی زیباترین حرف‌های عشق در سکوت گفته می‌شوند. وقتی دو نفر کنار هم می‌نشینند و فقط نفس می‌کشند، گاهی این سکوت از هزاران کلمه عمیق‌تر است.",
      content: "عشق در سکوت، زیباترین نوع عشق است. وقتی دو نفر کنار هم می‌نشینند و فقط نفس می‌کشند، گاهی این سکوت از هزاران کلمه عمیق‌تر است. در این سکوت، قلب‌ها با هم صحبت می‌کنند و روح‌ها به هم می‌رسند. عشق واقعی نیازی به کلمات ندارد، چون در سکوت هم می‌تواند خودش را نشان دهد.",
      author: "پرستو",
      date: "۱۵ آذر ۱۴۰۲",
      category: "عشق",
      readTime: "۳ دقیقه",
      tags: ["عشق", "سکوت", "احساسات"]
    },
    {
      id: 2,
      title: "تنهایی، دوست قدیمی",
      excerpt: "تنهایی همیشه بد نیست. گاهی بهترین دوست ما همین تنهایی است که به ما فرصت می‌دهد خودمان را بهتر بشناسیم و رشد کنیم.",
      content: "تنهایی همیشه بد نیست. گاهی بهترین دوست ما همین تنهایی است که به ما فرصت می‌دهد خودمان را بهتر بشناسیم و رشد کنیم. در تنهایی، ما یاد می‌گیریم که چطور با خودمان کنار بیاییم و چطور خودمان را دوست داشته باشیم. این عشق به خود، پایه‌ی هر عشق دیگری است.",
      author: "پرستو",
      date: "۱۲ آذر ۱۴۰۲",
      category: "خودشناسی",
      readTime: "۴ دقیقه",
      tags: ["تنهایی", "خودشناسی", "رشد"]
    },
    {
      id: 3,
      title: "زبان قلب",
      excerpt: "قلب زبان خاص خودش را دارد. زبانی که با کلمات معمولی نمی‌توان آن را ترجمه کرد. زبانی که فقط با احساس می‌توان فهمید.",
      content: "قلب زبان خاص خودش را دارد. زبانی که با کلمات معمولی نمی‌توان آن را ترجمه کرد. زبانی که فقط با احساس می‌توان فهمید. وقتی قلب حرف می‌زند، تمام وجود ما می‌لرزد و می‌فهمیم که این صدای واقعی ماست. صدایی که از عمق وجودمان می‌آید.",
      author: "پرستو",
      date: "۱۰ آذر ۱۴۰۲",
      category: "احساسات",
      readTime: "۵ دقیقه",
      tags: ["قلب", "احساسات", "زبان"]
    },
    {
      id: 4,
      title: "عشق در عصر دیجیتال",
      excerpt: "در دنیای امروز، عشق شکل جدیدی پیدا کرده. اما آیا واقعاً عشق تغییر کرده یا فقط نحوه‌ی ابراز آن متفاوت شده؟",
      content: "در دنیای امروز، عشق شکل جدیدی پیدا کرده. اما آیا واقعاً عشق تغییر کرده یا فقط نحوه‌ی ابراز آن متفاوت شده؟ عشق همیشه همان عشق است - عمیق، صادق و انسانی. فقط ابزارهای ابراز آن تغییر کرده‌اند. مهم این است که ما هنوز بتوانیم عمق احساساتمان را حفظ کنیم.",
      author: "پرستو",
      date: "۸ آذر ۱۴۰۲",
      category: "عشق مدرن",
      readTime: "۶ دقیقه",
      tags: ["عشق", "تکنولوژی", "مدرن"]
    },
    {
      id: 5,
      title: "شجاعت دوست داشتن",
      excerpt: "دوست داشتن شجاعت می‌خواهد. شجاعت آسیب دیدن، شجاعت امید داشتن، و شجاعت ادامه دادن حتی وقتی سخت است.",
      content: "دوست داشتن شجاعت می‌خواهد. شجاعت آسیب دیدن، شجاعت امید داشتن، و شجاعت ادامه دادن حتی وقتی سخت است. اما این شجاعت ارزشش را دارد، چون عشق زیباترین تجربه‌ی انسانی است. تجربه‌ای که ما را کامل می‌کند و به زندگی‌مان معنی می‌دهد.",
      author: "پرستو",
      date: "۵ آذر ۱۴۰۲",
      category: "شجاعت",
      readTime: "۴ دقیقه",
      tags: ["شجاعت", "عشق", "امید"]
    },
    {
      id: 6,
      title: "لحظه‌های کوچک، عشق‌های بزرگ",
      excerpt: "عشق همیشه در لحظه‌های بزرگ نیست. گاهی در یک لبخند ساده، یک نگاه کوتاه، یا یک دست گرفتن آرام، عشق خودش را نشان می‌دهد.",
      content: "عشق همیشه در لحظه‌های بزرگ نیست. گاهی در یک لبخند ساده، یک نگاه کوتاه، یا یک دست گرفتن آرام، عشق خودش را نشان می‌دهد. این لحظه‌های کوچک هستند که عشق‌های بزرگ را می‌سازند. لحظه‌هایی که شاید به چشم نیایند، اما قلب را پر می‌کنند.",
      author: "پرستو",
      date: "۳ آذر ۱۴۰۲",
      category: "لحظه‌ها",
      readTime: "۳ دقیقه",
      tags: ["لحظه‌ها", "عشق", "جزئیات"]
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
            <Link href="/faq" className="body-text hover:text-royal-300 transition-colors">
              سوالات پرتکرار
            </Link>
            <Link href="/contact" className="body-text hover:text-royal-300 transition-colors">
              ارتباط با ما
            </Link>
            <Link href="/blog" className="body-text text-royal-300 font-medium">
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
                <BookOpen className="w-4 h-4 text-royal-300" />
                <span className="text-sm font-medium text-white">لحظه‌های عاشقانه</span>
              </motion.div>
              
              <h1 className="title-primary">
                لحظه‌ها
              </h1>
              
              <p className="body-text text-lg max-w-3xl mx-auto">
                اینجا جایی است که ما لحظه‌های زیبای عشق، احساسات عمیق انسانی، 
                و داستان‌هایی که قلب را لمس می‌کنند را به اشتراک می‌گذاریم.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-royal-300/10 text-royal-300">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="title-secondary text-xl leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="body-text line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center">
                        <User className="w-4 h-4 text-royal-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-royal-300">{post.author}</p>
                        <p className="text-xs text-gray-300">{post.date}</p>
                      </div>
                    </div>
                    
                    <button className="w-8 h-8 rounded-full glass-card flex items-center justify-center hover:bg-royal-300 hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-full glass-card mb-4">
                <Sparkles className="w-4 h-4 text-royal-300" />
                <span className="text-sm font-medium text-white">پست ویژه</span>
              </div>
              <h2 className="title-secondary text-2xl mb-4">عشق در عصر دیجیتال</h2>
              <p className="body-text text-lg max-w-2xl mx-auto">
                در دنیای امروز، عشق شکل جدیدی پیدا کرده. اما آیا واقعاً عشق تغییر کرده 
                یا فقط نحوه‌ی ابراز آن متفاوت شده؟
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none body-text">
              <p>
                در دنیای امروز، عشق شکل جدیدی پیدا کرده. اما آیا واقعاً عشق تغییر کرده یا فقط نحوه‌ی ابراز آن متفاوت شده؟ عشق همیشه همان عشق است - عمیق، صادق و انسانی. فقط ابزارهای ابراز آن تغییر کرده‌اند.
              </p>
              <p>
                مهم این است که ما هنوز بتوانیم عمق احساساتمان را حفظ کنیم. در عصر دیجیتال، گاهی فراموش می‌کنیم که عشق واقعی در تماس انسانی است، در نگاه کردن به چشم‌های هم، در دست گرفتن هم، در بودن کنار هم.
              </p>
              <p>
                تکنولوژی می‌تواند ابزاری برای نزدیک‌تر کردن ما باشد، اما نباید جایگزین عشق واقعی شود. عشق در هر عصری، عشق است - عمیق، صادق و انسانی.
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <User className="w-6 h-6 text-royal-300" />
                </div>
                <div>
                  <p className="font-medium text-royal-300">پرستو</p>
                  <p className="text-sm text-gray-300">۸ آذر ۱۴۰۲ • ۶ دقیقه مطالعه</p>
                </div>
              </div>
              
              <div className="flex space-x-2 space-x-reverse">
                {["عشق", "تکنولوژی", "مدرن"].map((tag, index) => (
                  <span key={index} className="px-3 py-1 rounded-full text-xs bg-royal-300/10 text-royal-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 space-y-8"
          >
            <h2 className="title-secondary">از لحظه‌های جدید باخبر شوید</h2>
            <p className="body-text text-lg max-w-2xl mx-auto">
              هر هفته داستان‌های جدید، لحظه‌های زیبا و افکار عمیق را برای شما ارسال می‌کنیم.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="input-glass flex-1"
              />
              <button className="btn-glass whitespace-nowrap">
                عضویت
              </button>
            </div>
            
            <p className="text-sm text-gray-300">
              نگران نباشید، ما اسپم ارسال نمی‌کنیم و می‌توانید هر زمان که خواستید لغو عضویت کنید.
            </p>
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
              حالا که لحظه‌های زیبای ما را دیدید، بیا شروع کنیم. 
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