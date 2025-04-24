import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/pdfjs-dist/build/pdf.worker.mjs', // Correct path
          dest: 'assets/pdfjs',
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      external: ['fsevents'], // Mark fsevents as external
    },
  },
});