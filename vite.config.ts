/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base must match the GitHub Pages sub-path: https://stscheb.github.io/githubactions/
export default defineConfig({
  base: '/githubactions/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'html', 'json-summary'],
      include: ['src/lib/**/*.{ts,tsx}'],
      exclude: ['src/lib/index.ts', '**/*.test.{ts,tsx}'],
    },
  },
});
