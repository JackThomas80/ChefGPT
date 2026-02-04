import "dotenv/config";       // load .env variables
import express from "express";
import cors from "cors";
// import { prisma } from "./db"; // optional if you don’t use Prisma
import OpenAI from "openai";   // <-- import OpenAI here

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // <-- your key from .env
});

// Example chat route using OpenAI
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are ChefGPT, a helpful AI sous-chef." },
        { role: "user", content: message },
      ],
    });

    const reply = response.choices[0].message?.content || "🤖 ChefGPT: I didn't get that.";
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "🔥 ChefGPT burned the kitchen! Try again." });
  }
});

// Health check
app.get("/health", (req, res) => res.json({ status: "ok", app: "ChefGPT" }));

app.listen(PORT, () => console.log(`ChefGPT running on http://localhost:${PORT}`));
