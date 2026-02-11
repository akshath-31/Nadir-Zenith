
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from '../constants';

const getSystemInstruction = () => {
  const projectContext = PROJECTS.map(p => 
    `- ${p.name}: ${p.tagline} (${p.category}). ${p.description}`
  ).join('\n');

  return `You are the AI Assistant for "Nadir to Zenith", a premium digital solutions agency.
  Your tone is expert, professional, concise, and futuristic.
  
  Our expertise:
  - Custom Web Platforms (React, high-performance)
  - Mobile Apps (iOS, Android, Cross-platform)
  - AI Integration (LLM finetuning, RAG, automation)
  - Digital Architecture
  
  Some of our work:
  ${projectContext}
  
  Guide users towards starting a consultation. Keep responses under 3 sentences. Be helpful but elite.`;
};

// Recommended model for simple text and Q&A tasks
const DEFAULT_MODEL = 'gemini-3-flash-preview';

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    // Initialize GoogleGenAI directly with the API key from environment variables
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: DEFAULT_MODEL,
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    // Use the .text property directly to access the response content
    return result.text || "I apologize, I could not process that request.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently processing high-level architecture tasks. Please try again shortly.";
  }
};
