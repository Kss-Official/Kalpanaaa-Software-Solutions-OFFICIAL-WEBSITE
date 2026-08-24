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
        // App shell only. This previously matched every image under `public/`, so the generated
        // service worker precached ~200 entries / ~99 MB — including the original
        // pre-optimisation SVG/PNG artwork that nothing references any more. The PWA is scoped to
        // `/portal`, an internal tool that cannot do anything useful without the network, so
        // precaching marketing artwork bought nothing while making the SW install enormous.
        // Images are still served (and HTTP-cached) normally; only the speculative precache
        // is gone.
        globPatterns:
          command === "build"
            ? ["**/*.{js,css,html,ico}", "pwa-192x192.png", "pwa-512x512.png"]
            : [],
        maximumFileSizeToCacheInBytes: 15000000,
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
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage'],
          'vendor-three': ['three', '@react-three/fiber'],
          'vendor-charts': ['recharts'],
          'vendor-motion': ['framer-motion', 'motion'],
        },
      },
    },
  },
}));
