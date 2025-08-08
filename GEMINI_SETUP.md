# Gemini API Setup Guide

## 1. Get Your API Key

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click on "Get API key" in the top right
4. Create a new API key or use an existing one
5. Copy the API key (it starts with `AIza...`)

## 2. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Gemini API Configuration
GEMINI_API_KEY=AIzaSyC2zFWjqxpLcfmp9Z7Jd1ShOl4DfhVfKUk

# Optional: Override API URL if needed
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
```

**Important**: Replace `your_actual_api_key_here` with your actual API key from step 1.

## 3. Test Your API Key

You can test your API key using curl:

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'x-goog-api-key: YOUR_ACTUAL_API_KEY' \
  -X POST \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "Hello, how are you?"
          }
        ]
      }
    ]
  }'
```

## 4. Restart Your Development Server

After creating the `.env.local` file, restart your Next.js development server:

```bash
npm run dev
```

## 5. Troubleshooting

### 403 Error
- Check if your API key is correct
- Ensure you have enabled the Gemini API in Google Cloud Console
- Verify your API key has the necessary permissions

### ENOTFOUND Error
- Check your internet connection
- Verify DNS resolution
- Try using a different network

### Rate Limiting (429 Error)
- The API has rate limits
- Wait a few minutes before trying again
- Consider implementing retry logic

## 6. Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Keep your API key secure and don't share it publicly 