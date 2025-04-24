import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/Portofoliu-F.Nicole/', // 🛠️ THIS IS CRUCIAL
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/pdfjs-dist/build/pdf.worker.mjs',
          dest: 'assets/pdfjs',
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      external: ['fsevents'],
    },
  },
});
