import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Extract text from PDF
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    let resumeText = '';
    try {
      const pdfParse = require('pdf-parse');
      const data = await pdfParse(buffer);
      resumeText = data.text;
    } catch (e) {
      console.error('PDF Parse Error:', e);
      return NextResponse.json({ error: 'Failed to parse PDF file' }, { status: 400 });
    }

    const systemInstruction = `You are an expert ATS (Applicant Tracking System) and senior recruiter.
Analyze the provided text. First, determine if the text is actually a resume. If it is not a resume (e.g. it's a random document, an essay, or just a few meaningless words), return {"isResume": false, "error": "The uploaded document does not appear to be a resume."}.
If it IS a resume, generate a structured JSON response matching this interface:
{
  "isResume": true,
  "atsScore": number (0-100),
  "missingSkills": string[],
  "strengths": string[],
  "weaknesses": string[],
  "improvementSuggestions": string[],
  "learningResources": [
    {
      "skill": string,
      "resources": string[]
    }
  ]
}

Only return valid JSON without markdown wrapping. Be brutally honest but constructive. Provide 3-5 items for each array.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: `Here is the resume text:\n\n${resumeText}` }]
        }
      ],
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
      }
    });

    let result;
    try {
      result = JSON.parse(response.text || '{}');
    } catch (e) {
      console.error('Failed to parse AI resume JSON:', response.text);
      return NextResponse.json({ error: 'Failed to generate analysis' }, { status: 500 });
    }

    if (result.isResume === false) {
      return NextResponse.json({ error: result.error || 'The uploaded document does not appear to be a resume.' }, { status: 400 });
    }

    // Default fallbacks for missing data
    if (typeof result.atsScore !== 'number') result.atsScore = 50;

    // Add required UI fields
    result.fileName = file.name;
    result.analyzedAt = new Date().toISOString();

    return NextResponse.json(result);
  } catch (error) {
    console.error('Resume API Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
