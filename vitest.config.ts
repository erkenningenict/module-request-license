import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import env from 'vite-plugin-env-compatible';
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
    strictPort: true
  },
  define: {
    // here is the main update
    global: 'window',
    'process.env': {
      GATSBY_ERKENNINGEN_LOGIN_URL: '',
      ERKENNINGEN_LOGIN_URL: '',
      REACT_APP_ERKENNINGEN_LOGIN_URL: '',
      ERKENNINGEN_ADMIN_URL: '',
      ERKENNINGEN_SITE_TYPE: 'admin',
    },
  },
  plugins: [react(), viteTsconfigPaths(), env()],
});
