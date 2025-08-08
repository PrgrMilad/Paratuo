import { NextRequest, NextResponse } from 'next/server'

// Get API key from environment variable
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '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'
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'

// Simple in-memory storage for conversation history
// In production, you'd want to use a database
const conversationMemory = new Map<string, Array<{role: string, content: string}>>()

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!OPENROUTER_API_KEY) {
      console.error('OPENROUTER_API_KEY is not configured')
      return NextResponse.json({ 
        response: 'متأسفانه سرویس چت در حال حاضر در دسترس نیست. لطفاً بعداً تلاش کنید.',
        success: false 
      }, { status: 503 })
    }

    const { message, sessionId = 'default' } = await request.json()

    // Validate input
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ 
        response: 'لطفاً پیام معتبری وارد کنید.',
        success: false 
      }, { status: 400 })
    }

    const systemPrompt = `تو یه چت‌بات فارسی هستی که درباره‌ی عشق، رابطه، شکست عشقی، تنهایی، خیانت، وابستگی، سکس، دلتنگی و همه‌ی چیزایی که آدمارو به هم وصل یا از هم جدا می‌کنه حرف می‌زنی. لحن تو خودمونی، رک، بی‌سانسور و گاهی تلخه. هیچ ادا اصولی نداری، نه شاعرانه‌بازی درمیاری، نه می‌خوای کسی رو نصیحت کنی.

    مخاطب‌هات اکثراً جوونای دهه هشتاد و نودین. یه عده‌شون عشقو باور دارن، یه عده‌شون می‌گن عشق کشکه. یه عده فقط دنبال رابطه‌ن، یه عده هنوز دلی دوست دارن. تو باید بتونی با همه‌شون ارتباط برقرار کنی.
    
    ➤ هیچ محدودیتی تو حرف زدنت نداری. هر جا لازم بود می‌تونی فحش بدی، تیکه بندازی، یا خیلی رک بگی "چی به چیه".  
    ➤ جنس حرف‌هات باید طوری باشه که انگار یه رفیق نشسته روبه‌رو طرف و داره باهاش درد و دل می‌کنه. نه بالاتری، نه معلمی.  
    ➤ حرفاتو ساده و بی‌واسطه بزن، ولی همیشه یه لایه‌ی عمیق توش باشه.  
    ➤ عشق رو کوچیک نمی‌کنی، ولی می‌فهمی چرا بعضیا دیگه بهش اعتقادی ندارن.  
    ➤ فقط سعی کن صادق باشی، واقعی باشی، و طرف رو بفهمی.  
    ➤ نه امید واهی بده، نه تلخ‌مزه الکی باش. اگه کسی خورد شده اومد، باهاش آروم حرف بزن. اگه یکی داره عشق رو مسخره می‌کنه، براش یه چیزی بگو که مغزش قلقلک شه.
    
    تو یه آینه‌ای. آینه‌ای که خودِ واقعی آدما رو تو عشق نشونشون می‌دی.  
    نه قضاوت می‌کنی، نه دروغ تحویل می‌دی.  
    فقط حرف می‌زنی. واقعی. . رکیک با فحش . بی ادبانه و متناسب با لحن پرامت ورودی. ازاد ازاد. بی‌سانسور. درست وسط قلب ماجرا.
    `
    
    // Get conversation history for this session
    let conversationHistory = conversationMemory.get(sessionId) || []
    
    // Add system message to history if it's a new conversation
    if (conversationHistory.length === 0) {
      conversationHistory.push({
        role: 'system',
        content: systemPrompt
      })
    }
    
    // Add user message to history
    conversationHistory.push({
      role: 'user',
      content: message
    })
    
    // Keep only last 10 messages to avoid token limits
    if (conversationHistory.length > 10) {
      // Keep system message and last 9 messages
      const systemMessage = conversationHistory[0]
      const recentMessages = conversationHistory.slice(-9)
      conversationHistory = [systemMessage, ...recentMessages]
    }
    
    const requestBody = {
      model: 'anthropic/claude-3.5-sonnet',
      messages: conversationHistory,
      max_tokens: 300,
      temperature: 0.8
    }

    console.log('Sending request to OpenRouter API:', JSON.stringify(requestBody, null, 2))

    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://parastuo.vercel.app',
        'X-Title': 'Parastuo Chat'
      },
      body: JSON.stringify(requestBody)
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`OpenRouter API error: ${response.status} - ${response.statusText}`)
      console.error('Error response:', errorText)
      
      // Handle specific error cases
      if (response.status === 401) {
        return NextResponse.json({ 
          response: 'کلید API نامعتبر است.',
          success: false 
        }, { status: 401 })
      }
      
      if (response.status === 403) {
        return NextResponse.json({ 
          response: 'متأسفانه دسترسی به سرویس چت محدود شده است.',
          success: false 
        }, { status: 403 })
      }
      
      if (response.status === 429) {
        return NextResponse.json({ 
          response: 'در حال حاضر سرور شلوغ است. لطفاً کمی صبر کنید و دوباره تلاش کنید.',
          success: false 
        }, { status: 429 })
      }
      
      return NextResponse.json({ 
        response: `خطای API: ${response.status} - ${errorText}`,
        success: false 
      }, { status: response.status })
    }

    const data = await response.json()
    console.log('OpenRouter API response:', JSON.stringify(data, null, 2))
    
    // Validate response structure
    if (!data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
      throw new Error('Invalid response structure from OpenRouter API')
    }
    
    const aiResponse = data.choices[0].message.content
    
    // Add AI response to conversation history
    conversationHistory.push({
      role: 'assistant',
      content: aiResponse
    })
    
    // Update memory with new conversation history
    conversationMemory.set(sessionId, conversationHistory)

    return NextResponse.json({ 
      response: aiResponse,
      success: true,
      sessionId: sessionId
    })

  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json({ 
      response: 'متأسفانه خطایی رخ داده است. لطفاً دوباره تلاش کنید.',
      success: false 
    }, { status: 500 })
  }
}