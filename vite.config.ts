/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />
import * as path from "path";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";

import react from "@vitejs/plugin-react-swc";

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
        "**/public/**",
      ],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setup-tests.ts",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("@react-three")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "src/"),
    },
  },
});
