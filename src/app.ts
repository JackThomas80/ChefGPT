import "dotenv/config";           // load .env
import express from "express";
import cors from "cors";
import OpenAI from "openai";       // <-- important

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// initialize OpenAI once
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// health route
app.get("/health", (req, res) => {
  res.json({ status: "ok", app: "ChefGPT" });
});

// chat route
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    });

    const reply = response.choices[0].message?.content || "ChefGPT burned the kitchen 🔥";

    res.json({ reply, recipes: [] }); // recipes can be added later
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "🔥 ChefGPT is on fire! Try again." });
  }
});

app.listen(PORT, () => {
  console.log(`ChefGPT running on http://localhost:${PORT}`);
});
