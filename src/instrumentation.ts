export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const PING_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes (Render sleeps after 15m)

    const pingSelf = async () => {
      // RENDER_EXTERNAL_URL is automatically set by Render on free/paid web services (e.g. https://portfolio-xxx.onrender.com)
      const targetUrl =
        process.env.RENDER_EXTERNAL_URL
          ? `${process.env.RENDER_EXTERNAL_URL}/api/ping`
          : process.env.APP_URL
          ? `${process.env.APP_URL}/api/ping`
          : `http://localhost:${process.env.PORT || 3000}/api/ping`;

      try {
        const res = await fetch(targetUrl, {
          headers: { "User-Agent": "Render-KeepAlive/1.0" },
        });
        console.log(`[KeepAlive] Pinged ${targetUrl} - Status: ${res.status}`);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.warn(`[KeepAlive] Ping attempted to ${targetUrl}: ${msg}`);
      }
    };

    // Initial health ping 15 seconds after server boot
    setTimeout(pingSelf, 15000);
    // Recurring health ping every 10 minutes
    setInterval(pingSelf, PING_INTERVAL_MS);
  }
}
