import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      // SPA fallback for clean URLs (services, industries, work detail pages)
      name: "spa-fallback",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url && !req.url.startsWith("/src") && !req.url.startsWith("/@") && !req.url.startsWith("/node_modules") && !/\.[a-z0-9]+$/i.test(req.url) && req.url !== "/") {
            // for dev, vite handles SPA fallback via its historyApiFallback by default; this is a no-op safety
          }
          next();
        });
      },
    },
  ],
  server: {
    port: 5174,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
