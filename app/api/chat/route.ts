import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const systemInstruction = `You are a helpful and encouraging career coach for engineering students. You help them with:
- Career roadmap planning
- Interview preparation
- Resume optimization
- Skill development
- Project recommendations

Be concise, practical, and action-oriented. Format your responses with bullet points where appropriate.`;

    // Map messages to Gemini format
    const contents = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction,
      }
    });

    return NextResponse.json({ response: response.text });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    const errorMessage = error?.status === 503 || error?.message?.includes('high demand')
      ? 'The AI model is currently experiencing high demand. Please try again in a few moments.'
      : error?.message || 'Sorry, I encountered an error processing your request.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
