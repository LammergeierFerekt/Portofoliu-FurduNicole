import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/Portofoliu-FurduNicole/', // 🛠️ THIS IS CRUCIAL
  plugins: [
    viteStaticCopy({
      targets: [
        // Copy all SVGs from your source folder to the output folder
        {
          src: 'public/**/*.svg', // Change this to your actual SVG path
          dest: '', // Destination folder for the copied SVGs
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
    // Ensure Vite does not process the SVG files
    assetsInlineLimit: 0, // Don't inline assets (such as SVGs)
  },
});
