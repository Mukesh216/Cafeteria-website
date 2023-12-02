import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Cafeteria-website/', // Set the correct base
  plugins: [react()],
  resolve: {
    alias: {
      '/src': '/Cafeteria-website/src', // Adjust the alias path
    },
  },
});
