# OJHAS WATWANI — Senior Technology Consultant Portfolio

A luxury editorial, recruiter-first portfolio engineered for **Ojhas Watwani** — Senior Technology Consultant specializing in FinTech, Banking Systems, and Trading Infrastructure.

---

## 🌟 Key Features

- **Editorial FinTech Aesthetic:** Warm cream/ivory paper palette (`#F6F3EC`), classical serif typography, architectural blueprints, and interactive deal/case-study modals.
- **Zero Cold-Starts on Render:** Built-in self-calling keep-alive instrumentation (`src/instrumentation.ts` + `/api/ping`) that continuously pings the service every 10 minutes to prevent Render free-tier instances from spinning down or displaying the loading screen.
- **Render Ready:** Includes [`render.yaml`](./render.yaml) for zero-config 1-click Web Service deployment.
- **Production Performance:** Next.js 16 (Turbopack, Partial Prefetching, Cache Components), Framer Motion, Tailwind CSS v4, Lucide icons.

---

## 🚀 One-Click Deployment to Render

1. Go to [Render Dashboard](https://dashboard.render.com).
2. Click **New +** → **Web Service**.
3. Connect your repository: `https://github.com/ojhaswatwani1905/portfolio`.
4. Configure settings (or let Render detect [`render.yaml`](./render.yaml)):
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Plan:** Free
5. (Optional) Set environment variable:
   - `RENDER_EXTERNAL_URL`: *(Render automatically populates this with your deployed URL, e.g. `https://portfolio-xxxx.onrender.com`)*
6. Click **Create Web Service**.

> **Note on Keep-Alive:** The background process (`src/instrumentation.ts`) automatically pings `https://<your-service>.onrender.com/api/ping` every 10 minutes. Because Render sleeps idle free instances after 15 minutes of inactivity, this keep-alive ensures your portfolio stays warm and responsive 24/7 without loading screens.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Test the keep-alive endpoint:
```bash
curl http://localhost:3000/api/ping
```

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment Target:** Render (Node.js 20)
