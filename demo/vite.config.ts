import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mui/carousel': path.resolve(__dirname, '../packages/mui-carousel/src'),
    },
  },
  server: {
    port: 3000,
  },
});
