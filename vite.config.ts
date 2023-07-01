/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />
import * as path from "path";
import react from "@vitejs/plugin-react-swc";

import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [viteCompression(), react(), svgr()],
  test: {
    coverage: {
      all: false,
      provider: "c8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/coverage/**",
        "**/public/**"
      ],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setup-tests.ts"
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("@react-three/cannon") ||
            id.includes("@react-three/fiber")
          ) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@three": path.resolve(__dirname, "./src/three"),
      "@type": path.resolve(__dirname, "./src/types"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@assets": path.resolve(__dirname, "./src/assets")
    }
  }
});
