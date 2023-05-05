/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteCompression(), react(), svgr()],
  test: {
    coverage: {
      all: false,
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['**/node_modules/**', '**/dist/**', '**/coverage/**', '**/public/**'],
      lines: 90,
      functions: 90,
      branches: 90,
      statements: 90,
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup-tests.ts',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          main: ['./src/styles/index.css'],
        },
      },
    },
  },
});
