import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portifolio-site/', // Substitua 'Portifolio-Site' pelo nome do seu repositório
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});