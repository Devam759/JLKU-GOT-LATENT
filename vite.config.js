import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    watch: {
      ignored: ['**/assets/completed_contestants.json']
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        console.log(`[Vite Server] Middleware received: ${req.method} ${req.url}`);
        if (req.method === 'POST' && req.url === '/api/save-completed') {
          console.log(`[Vite Server] Matching save-completed endpoint!`);
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              console.log(`[Vite Server] Data to save:`, data);
              const filePath = path.resolve(__dirname, 'assets/completed_contestants.json');
              fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
              console.log(`[Vite Server] File saved successfully at ${filePath}`);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/plain');
              res.end('Saved successfully');
            } catch (err) {
              console.error('[Vite Server] Error saving completed contestants:', err);
              res.statusCode = 500;
              res.end('Internal Server Error');
            }
          });
        } else {
          next();
        }
      });
    }
  }
});
