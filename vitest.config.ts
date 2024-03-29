import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns';

// localhost part
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '',
  server: {
    // this ensures that the browser opens upon server start
    open: false,
    host: 'localhost',
    // this sets a default port to 3000
    port: 3000,
    strictPort: true,
  },
  plugins: [react()],
});
