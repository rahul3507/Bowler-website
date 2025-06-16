import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    transformer: "lightningcss",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["swiper/react", "swiper/modules"],
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-avatar', '@radix-ui/react-checkbox', '@radix-ui/react-label'],
          icons: ['@tabler/icons-react', 'lucide-react', 'react-icons'],
          routing: ['react-router-dom'],
          charts: ['recharts'],
          swiper: ['swiper', 'swiper/react', 'swiper/modules'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    }
  }
});