import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/the_outliers/', // 👈 Replace with your GitHub repo name
  plugins: [react()],
});
