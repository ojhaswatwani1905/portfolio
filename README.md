# OJHAS WATWANI — Senior Technology Consultant Portfolio

A luxury editorial, recruiter-first portfolio engineered for **Ojhas Watwani** — Senior Technology Consultant specializing in FinTech, Banking Systems, and Trading Infrastructure.

---

## 🌟 Key Features

- **Editorial FinTech Aesthetic:** Warm cream/ivory paper palette (`#F6F3EC`), classical serif typography, architectural blueprints, and interactive deal/case-study modals.
- **Render Ready:** Includes [`render.yaml`](./render.yaml) for zero-config 1-click Web Service deployment on Node 20.
- **Health Check Endpoint:** Lightweight `/api/ping` status endpoint for monitoring uptime and service responsiveness.
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
5. Click **Create Web Service**.

> **Note on Render Free Tier:** Hosted on Render Free. Free web services may spin down after periods of inactivity and may require a short wake-up period on the next request. For persistent zero-latency uptime without spin-downs, upgrade the instance to Render Starter or configure an external synthetic monitor probe.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Test the health check endpoint:
```bash
curl http://localhost:3000/api/ping
```

---

## 🛠️ Verified Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment Target:** Render (Node.js 20)
