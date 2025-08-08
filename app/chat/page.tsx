'use client'

import { motion } from 'framer-motion'
import { Heart, Send, ArrowLeft, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useRef, useEffect } from 'react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'سلام عزیزم 🌸\nامروز چه احساسی داری؟ می‌خوای درباره‌ی چی حرف بزنیم؟',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const endOfMessagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText })
      })

      const data = await response.json()

      if (data.success) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          isUser: false,
          timestamp: new Date()
        }

        setMessages(prev => [...prev, aiMessage])
      } else {
        // Fallback response if API fails
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'متأسفانه مشکلی پیش آمده. لطفاً دوباره تلاش کنید.',
          isUser: false,
          timestamp: new Date()
        }

        setMessages(prev => [...prev, aiMessage])
      }
    } catch (error) {
      console.error('Chat error:', error)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'متأسفانه مشکلی پیش آمده. لطفاً دوباره تلاش کنید.',
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
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
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link href="/" className="btn-glass bg-glass-light hover:bg-glass-medium flex items-center space-x-2 space-x-reverse">
              <ArrowLeft className="w-4 h-4" />
              <span>بازگشت</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Chat Container */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-10 h-[85vh] flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center space-x-4 space-x-reverse mb-6 pb-4 border-b border-white/10">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-royal-300" />
              </div>
              <div>
                <h2 className="title-secondary text-lg">گفتگو با پرستو</h2>
                <p className="body-text text-sm text-royal-300">همدم عاشقانه‌ی شما</p>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-6">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.isUser ? 'chat-bubble user' : 'chat-bubble assistant'}`}>
                    <p className="body-text whitespace-pre-line">{message.text}</p>
                    <p className="text-xs text-royal-300 mt-2 opacity-70">
                      {message.timestamp.toLocaleTimeString('fa-IR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="chat-bubble assistant">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="flex space-x-1 space-x-reverse">
                        <div className="w-2 h-2 bg-royal-300 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-royal-300 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-royal-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      <span className="body-text text-sm">در حال تایپ...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={endOfMessagesRef} />
            </div>

            {/* Input Area */}
            <div className="flex items-end space-x-4 space-x-reverse">
              <div className="flex-1">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="حرف بزن، من گوش می‌کنم..."
                  className="input-glass w-full resize-none"
                  rows={3}
                  disabled={isTyping}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="btn-glass p-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 