import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    {
      // SPA fallback for clean URLs (services, industries, work detail pages)
      name: "spa-fallback",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (
            req.url &&
            !req.url.startsWith("/src") &&
            !req.url.startsWith("/@") &&
            !req.url.startsWith("/node_modules") &&
            !/\.[a-z0-9]+$/i.test(req.url) &&
            req.url !== "/"
          ) {
            // for dev, vite handles SPA fallback via its historyApiFallback by default; this is a no-op safety
          }
          next();
        });
      },
    },
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html",
      },
      workbox: {
        globPatterns:
          command === "build"
            ? ["**/*.{js,css,html,ico,png,svg,jpeg,webp}"]
            : [],
        maximumFileSizeToCacheInBytes: 15000000,
        globIgnores: ["**/ImageOrbit.png"],
        skipWaiting: true,
        clientsClaim: true,
        importScripts: ["/firebase-messaging-sw.js"],
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/^\/api\//],
      },
      manifest: {
        name: "Kalpanaaa EMP Portal",
        short_name: "KSS Portal",
        description: "Kalpanaaa Software Solutions Employee Management Portal",
        theme_color: "#0a0a0f",
        background_color: "#0a0a0f",
        display: "standalone",
        scope: "/portal",
        start_url: "/portal",
        icons: [
          { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5174,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth", "firebase/firestore", "firebase/storage"],
  },
}));
