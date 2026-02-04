# 🍳 ChefGPT

ChefGPT is an AI-powered culinary assistant — your Michelin-minded digital sous-chef.  
Ask about dishes, ingredients, techniques, substitutions, menus, or food science and get thoughtful, chef-level responses.

Frontend is a lightweight React app.  
Backend is a Node.js + TypeScript API deployed on Fly.io.

---

## ✨ Features

- 👨‍🍳 AI culinary assistant powered by OpenAI
- 🧠 Knowledge of techniques, flavor pairings, substitutions, and plating
- ⚡ Simple REST API
- 🌍 Fly.io backend + static frontend
- 🔐 Secure API key handling (no secrets in GitHub)

---

## 🏗️ Project Structure

ChefGPT/
├── chefgpt-backend/
│ ├── src/
│ │ └── app.ts
│ ├── dist/
│ ├── package.json
│ ├── tsconfig.json
│ ├── Dockerfile
│ └── fly.toml
│
└── chefgpt-frontend/
└── index.html


---

## 🚀 Live Deployment

- Backend: Fly.io
- Frontend: Static HTML (Netlify or similar)

DNS propagation on Fly.io may take a few minutes after deploy.

---

## 🔧 Backend Setup (Local)

### Install dependencies
```bash
cd chefgpt-backend
npm install

OPENAI_API_KEY=your_openai_api_key_here
PORT=3000

npm run dev
npm run build
npm start

http://localhost:3000
