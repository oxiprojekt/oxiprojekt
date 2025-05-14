import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Exposes the server on the local network
    port: 5173,        // Default port (optional, can change if needed)
  },
});
