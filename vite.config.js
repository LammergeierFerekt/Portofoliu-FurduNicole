import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/Portofoliu-FurduNicole/',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'public/pdfs/*', // Ensure this matches your PDF folder
          dest: 'pdfs', // Destination folder in the build output
        },
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
    assetsInlineLimit: 0,
    emptyOutDir: true, // Automatically clears the dist folder before building
  },
});
