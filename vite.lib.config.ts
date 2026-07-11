import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// Library build: bundles src/lib into dist/ for npm publishing.
// react/react-dom are externalized so the consumer supplies a single copy
// (declared in peerDependencies), avoiding duplicate React in their bundle.
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src/lib'], exclude: ['**/*.test.*'] }),
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL('src/lib/index.ts', import.meta.url)),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
