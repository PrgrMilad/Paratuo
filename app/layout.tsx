import type { Metadata, Viewport } from 'next'
import './globals.css'
// import Header from './components/Header'
// import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'پرستو | همدم عاشقانه‌ی شما',
  description: 'چت‌باتی که با شما درباره‌ی عشق، روابط و احساسات عمیق انسانی صحبت می‌کند. تجربه‌ای متفاوت از گفتگوی عاطفی که شما را به تأمل وادارد.',
  keywords: 'عشق، روابط، احساسات، چت‌بات، هوش مصنوعی، گفتگوی عاطفی، پرستو',
  authors: [{ name: 'پرستو تیم' }],
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'پرستو | همدم عاشقانه‌ی شما',
    description: 'چت‌باتی که با شما درباره‌ی عشق، روابط و احساسات عمیق انسانی صحبت می‌کند',
    type: 'website',
    locale: 'fa_IR',
    images: [
      {
        url: '/logo-rounded.png',
        width: 200,
        height: 200,
        alt: 'پرستو - همدم عاشقانه‌ی شما',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'پرستو | همدم عاشقانه‌ی شما',
    description: 'چت‌باتی که با شما درباره‌ی عشق، روابط و احساسات عمیق انسانی صحبت می‌کند',
    images: ['/logo-rounded.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </head>
      <body className="font-iran text-white min-h-screen antialiased selection:bg-royal-400 selection:text-white">
        {/* <Header /> */}
        <div className="relative flex flex-col min-h-screen">
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  )
} 