import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "career-coach", 
  name: "Sensai (AI-Career Coach)",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});