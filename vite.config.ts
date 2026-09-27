import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-api-contact-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/contact' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const data = JSON.parse(body || '{}');
                console.log('Incoming contact submission [local dev]:', data);
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true, message: 'Message received by local server.' }));
              } catch (e) {
                res.statusCode = 400;
                res.end(JSON.stringify({ message: 'Invalid JSON payload' }));
              }
            });
            return;
          }
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/contact' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const data = JSON.parse(body || '{}');
                console.log('Incoming contact submission [preview]:', data);
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true, message: 'Message received by preview server.' }));
              } catch (e) {
                res.statusCode = 400;
                res.end(JSON.stringify({ message: 'Invalid JSON payload' }));
              }
            });
            return;
          }
          next();
        });
      }
    }
  ],
  assetsInclude: ['**/*.pdf'],
  build: {
    assetsInlineLimit: 0,
  },
});
