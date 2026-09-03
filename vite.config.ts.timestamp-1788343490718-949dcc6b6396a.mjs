// vite.config.ts
import { defineConfig } from "file:///E:/KSS-003-OFFICIAL/Kalpanaaa-Software-Solutions-OFFICIAL-WEBSITE/node_modules/vite/dist/node/index.js";
import react from "file:///E:/KSS-003-OFFICIAL/Kalpanaaa-Software-Solutions-OFFICIAL-WEBSITE/node_modules/@vitejs/plugin-react/dist/index.js";
import { VitePWA } from "file:///E:/KSS-003-OFFICIAL/Kalpanaaa-Software-Solutions-OFFICIAL-WEBSITE/node_modules/vite-plugin-pwa/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "E:\\KSS-003-OFFICIAL\\Kalpanaaa-Software-Solutions-OFFICIAL-WEBSITE";
var vite_config_default = defineConfig(({ command }) => ({
  plugins: [
    react(),
    {
      // SPA fallback for clean URLs (services, industries, work detail pages)
      name: "spa-fallback",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url && !req.url.startsWith("/src") && !req.url.startsWith("/@") && !req.url.startsWith("/node_modules") && !/\.[a-z0-9]+$/i.test(req.url) && req.url !== "/") {
          }
          next();
        });
      }
    },
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html"
      },
      workbox: {
        // App shell only. This previously matched every image under `public/`, so the generated
        // service worker precached ~200 entries / ~99 MB — including the original
        // pre-optimisation SVG/PNG artwork that nothing references any more. The PWA is scoped to
        // `/portal`, an internal tool that cannot do anything useful without the network, so
        // precaching marketing artwork bought nothing while making the SW install enormous.
        // Images are still served (and HTTP-cached) normally; only the speculative precache
        // is gone.
        globPatterns: command === "build" ? ["**/*.{js,css,html,ico}", "pwa-192x192.png", "pwa-512x512.png"] : [],
        maximumFileSizeToCacheInBytes: 15e6,
        skipWaiting: true,
        clientsClaim: true,
        importScripts: ["/firebase-messaging-sw.js"],
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/^\/api\//]
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
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    port: 5174,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  },
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth", "firebase/firestore", "firebase/storage"]
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxLU1MtMDAzLU9GRklDSUFMXFxcXEthbHBhbmFhYS1Tb2Z0d2FyZS1Tb2x1dGlvbnMtT0ZGSUNJQUwtV0VCU0lURVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcS1NTLTAwMy1PRkZJQ0lBTFxcXFxLYWxwYW5hYWEtU29mdHdhcmUtU29sdXRpb25zLU9GRklDSUFMLVdFQlNJVEVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0tTUy0wMDMtT0ZGSUNJQUwvS2FscGFuYWFhLVNvZnR3YXJlLVNvbHV0aW9ucy1PRkZJQ0lBTC1XRUJTSVRFL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQgfSkgPT4gKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAge1xyXG4gICAgICAvLyBTUEEgZmFsbGJhY2sgZm9yIGNsZWFuIFVSTHMgKHNlcnZpY2VzLCBpbmR1c3RyaWVzLCB3b3JrIGRldGFpbCBwYWdlcylcclxuICAgICAgbmFtZTogXCJzcGEtZmFsbGJhY2tcIixcclxuICAgICAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xyXG4gICAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoKHJlcSwgX3JlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICByZXEudXJsICYmXHJcbiAgICAgICAgICAgICFyZXEudXJsLnN0YXJ0c1dpdGgoXCIvc3JjXCIpICYmXHJcbiAgICAgICAgICAgICFyZXEudXJsLnN0YXJ0c1dpdGgoXCIvQFwiKSAmJlxyXG4gICAgICAgICAgICAhcmVxLnVybC5zdGFydHNXaXRoKFwiL25vZGVfbW9kdWxlc1wiKSAmJlxyXG4gICAgICAgICAgICAhL1xcLlthLXowLTldKyQvaS50ZXN0KHJlcS51cmwpICYmXHJcbiAgICAgICAgICAgIHJlcS51cmwgIT09IFwiL1wiXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gZm9yIGRldiwgdml0ZSBoYW5kbGVzIFNQQSBmYWxsYmFjayB2aWEgaXRzIGhpc3RvcnlBcGlGYWxsYmFjayBieSBkZWZhdWx0OyB0aGlzIGlzIGEgbm8tb3Agc2FmZXR5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIHJlZ2lzdGVyVHlwZTogXCJhdXRvVXBkYXRlXCIsXHJcbiAgICAgIGluamVjdFJlZ2lzdGVyOiBmYWxzZSxcclxuICAgICAgZGV2T3B0aW9uczoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgdHlwZTogXCJtb2R1bGVcIixcclxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiBcImluZGV4Lmh0bWxcIixcclxuICAgICAgfSxcclxuICAgICAgd29ya2JveDoge1xyXG4gICAgICAgIC8vIEFwcCBzaGVsbCBvbmx5LiBUaGlzIHByZXZpb3VzbHkgbWF0Y2hlZCBldmVyeSBpbWFnZSB1bmRlciBgcHVibGljL2AsIHNvIHRoZSBnZW5lcmF0ZWRcclxuICAgICAgICAvLyBzZXJ2aWNlIHdvcmtlciBwcmVjYWNoZWQgfjIwMCBlbnRyaWVzIC8gfjk5IE1CIFx1MjAxNCBpbmNsdWRpbmcgdGhlIG9yaWdpbmFsXHJcbiAgICAgICAgLy8gcHJlLW9wdGltaXNhdGlvbiBTVkcvUE5HIGFydHdvcmsgdGhhdCBub3RoaW5nIHJlZmVyZW5jZXMgYW55IG1vcmUuIFRoZSBQV0EgaXMgc2NvcGVkIHRvXHJcbiAgICAgICAgLy8gYC9wb3J0YWxgLCBhbiBpbnRlcm5hbCB0b29sIHRoYXQgY2Fubm90IGRvIGFueXRoaW5nIHVzZWZ1bCB3aXRob3V0IHRoZSBuZXR3b3JrLCBzb1xyXG4gICAgICAgIC8vIHByZWNhY2hpbmcgbWFya2V0aW5nIGFydHdvcmsgYm91Z2h0IG5vdGhpbmcgd2hpbGUgbWFraW5nIHRoZSBTVyBpbnN0YWxsIGVub3Jtb3VzLlxyXG4gICAgICAgIC8vIEltYWdlcyBhcmUgc3RpbGwgc2VydmVkIChhbmQgSFRUUC1jYWNoZWQpIG5vcm1hbGx5OyBvbmx5IHRoZSBzcGVjdWxhdGl2ZSBwcmVjYWNoZVxyXG4gICAgICAgIC8vIGlzIGdvbmUuXHJcbiAgICAgICAgZ2xvYlBhdHRlcm5zOlxyXG4gICAgICAgICAgY29tbWFuZCA9PT0gXCJidWlsZFwiXHJcbiAgICAgICAgICAgID8gW1wiKiovKi57anMsY3NzLGh0bWwsaWNvfVwiLCBcInB3YS0xOTJ4MTkyLnBuZ1wiLCBcInB3YS01MTJ4NTEyLnBuZ1wiXVxyXG4gICAgICAgICAgICA6IFtdLFxyXG4gICAgICAgIG1heGltdW1GaWxlU2l6ZVRvQ2FjaGVJbkJ5dGVzOiAxNTAwMDAwMCxcclxuICAgICAgICBza2lwV2FpdGluZzogdHJ1ZSxcclxuICAgICAgICBjbGllbnRzQ2xhaW06IHRydWUsXHJcbiAgICAgICAgaW1wb3J0U2NyaXB0czogW1wiL2ZpcmViYXNlLW1lc3NhZ2luZy1zdy5qc1wiXSxcclxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiBcImluZGV4Lmh0bWxcIixcclxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrRGVueWxpc3Q6IFsvXlxcL2FwaVxcLy9dLFxyXG4gICAgICB9LFxyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIG5hbWU6IFwiS2FscGFuYWFhIEVNUCBQb3J0YWxcIixcclxuICAgICAgICBzaG9ydF9uYW1lOiBcIktTUyBQb3J0YWxcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJLYWxwYW5hYWEgU29mdHdhcmUgU29sdXRpb25zIEVtcGxveWVlIE1hbmFnZW1lbnQgUG9ydGFsXCIsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6IFwiIzBhMGEwZlwiLFxyXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6IFwiIzBhMGEwZlwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwic3RhbmRhbG9uZVwiLFxyXG4gICAgICAgIHNjb3BlOiBcIi9wb3J0YWxcIixcclxuICAgICAgICBzdGFydF91cmw6IFwiL3BvcnRhbFwiLFxyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7IHNyYzogXCIvcHdhLTE5MngxOTIucG5nXCIsIHNpemVzOiBcIjE5MngxOTJcIiwgdHlwZTogXCJpbWFnZS9wbmdcIiB9LFxyXG4gICAgICAgICAgeyBzcmM6IFwiL3B3YS01MTJ4NTEyLnBuZ1wiLCBzaXplczogXCI1MTJ4NTEyXCIsIHR5cGU6IFwiaW1hZ2UvcG5nXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDUxNzQsXHJcbiAgICBob3N0OiB0cnVlLFxyXG4gIH0sXHJcbiAgcHJldmlldzoge1xyXG4gICAgcG9ydDogNDE3MyxcclxuICAgIGhvc3Q6IHRydWUsXHJcbiAgfSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGluY2x1ZGU6IFtcImZpcmViYXNlL2FwcFwiLCBcImZpcmViYXNlL2F1dGhcIiwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiwgXCJmaXJlYmFzZS9zdG9yYWdlXCJdLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyWCxTQUFTLG9CQUFvQjtBQUN4WixPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFFBQVEsT0FBTztBQUFBLEVBQzVDLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOO0FBQUE7QUFBQSxNQUVFLE1BQU07QUFBQSxNQUNOLGdCQUFnQixRQUFRO0FBQ3RCLGVBQU8sWUFBWSxJQUFJLENBQUMsS0FBSyxNQUFNLFNBQVM7QUFDMUMsY0FDRSxJQUFJLE9BQ0osQ0FBQyxJQUFJLElBQUksV0FBVyxNQUFNLEtBQzFCLENBQUMsSUFBSSxJQUFJLFdBQVcsSUFBSSxLQUN4QixDQUFDLElBQUksSUFBSSxXQUFXLGVBQWUsS0FDbkMsQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEdBQUcsS0FDN0IsSUFBSSxRQUFRLEtBQ1o7QUFBQSxVQUVGO0FBQ0EsZUFBSztBQUFBLFFBQ1AsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxNQUNoQixZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixrQkFBa0I7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFRUCxjQUNFLFlBQVksVUFDUixDQUFDLDBCQUEwQixtQkFBbUIsaUJBQWlCLElBQy9ELENBQUM7QUFBQSxRQUNQLCtCQUErQjtBQUFBLFFBQy9CLGFBQWE7QUFBQSxRQUNiLGNBQWM7QUFBQSxRQUNkLGVBQWUsQ0FBQywyQkFBMkI7QUFBQSxRQUMzQyxrQkFBa0I7QUFBQSxRQUNsQiwwQkFBMEIsQ0FBQyxVQUFVO0FBQUEsTUFDdkM7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLFFBQ2xCLFNBQVM7QUFBQSxRQUNULE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNMLEVBQUUsS0FBSyxvQkFBb0IsT0FBTyxXQUFXLE1BQU0sWUFBWTtBQUFBLFVBQy9ELEVBQUUsS0FBSyxvQkFBb0IsT0FBTyxXQUFXLE1BQU0sWUFBWTtBQUFBLFFBQ2pFO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGdCQUFnQixpQkFBaUIsc0JBQXNCLGtCQUFrQjtBQUFBLEVBQ3JGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
