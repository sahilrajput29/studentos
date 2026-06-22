import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { year, branch, goal } = await req.json();

    if (!year || !branch || !goal) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const systemInstruction = `You are an expert career counselor for engineering students.
Generate a structured JSON response containing:
1. "skills": exactly 5 key skills or topics the student should learn.
2. "projects": exactly 4 recommended projects (array of objects with "name", "difficulty" (Beginner|Intermediate|Advanced), and "description").

Tailor the response to their:
- Current Year: ${year}
- Branch/Major: ${branch}
- Target Goal: ${goal}

Return ONLY valid JSON. Do not include markdown formatting or backticks around the JSON.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: `Create a roadmap for a ${year} year ${branch} student aiming for ${goal}.` }]
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
      console.error('Failed to parse AI roadmap JSON:', response.text);
      result = {};
    }

    let skills = result.skills || [];
    let projects = result.projects || [];

    // Ensure we have some fallback in case the AI format is weird
    if (!Array.isArray(skills) || skills.length === 0) {
      skills = ['Fundamentals', 'Data Structures', 'Core Projects', 'Advanced Concepts', 'Interview Prep'];
    }
    if (!Array.isArray(projects) || projects.length === 0) {
      projects = [
        { name: 'Basic Project', difficulty: 'Beginner', description: 'Start with fundamentals' },
        { name: 'Intermediate App', difficulty: 'Intermediate', description: 'Apply core concepts' },
        { name: 'Advanced System', difficulty: 'Advanced', description: 'Build a scalable system' },
        { name: 'Capstone', difficulty: 'Advanced', description: 'Showcase all skills' }
      ];
    }

    return NextResponse.json({ skills: skills.slice(0, 5), projects: projects.slice(0, 4) });
  } catch (error) {
    console.error('Roadmap API Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
