import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join, extname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { gzipSync } from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4321;
const DIST = resolve(__dirname, 'dist');

const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none'",
};

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.json': 'application/json',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
  '.ttf':  'font/ttf',
  '.txt':  'text/plain',
  '.xml':  'application/xml',
};

const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.mjs', '.json', '.svg', '.xml', '.txt']);

function getCacheHeader(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (filePath.includes('/_astro/')) return 'public, max-age=31536000, immutable';
  if (['.woff2', '.woff', '.ttf', '.png', '.jpg', '.webp', '.ico'].includes(ext)) return 'public, max-age=2592000';
  if (ext === '.html') return 'public, max-age=0, must-revalidate';
  return 'public, max-age=3600';
}

function serve(res, data, ext, filePath, acceptEncoding) {
  const contentType = MIME[ext] || 'text/plain';
  const cache = getCacheHeader(filePath);
  const headers = { 'Content-Type': contentType, 'Cache-Control': cache, ...SECURITY_HEADERS };

  if (COMPRESSIBLE.has(ext) && acceptEncoding.includes('gzip')) {
    headers['Content-Encoding'] = 'gzip';
    headers['Vary'] = 'Accept-Encoding';
    res.writeHead(200, headers);
    res.end(gzipSync(data));
  } else {
    res.writeHead(200, headers);
    res.end(data);
  }
}

const server = createServer(async (req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = filePath.split('?')[0];
  const fullPath = resolve(DIST, '.' + filePath);
  const acceptEncoding = req.headers['accept-encoding'] || '';

  // Path traversal protection
  if (!fullPath.startsWith(DIST)) {
    res.writeHead(403, SECURITY_HEADERS);
    res.end('Forbidden');
    return;
  }

  try {
    const data = await readFile(fullPath);
    serve(res, data, extname(fullPath).toLowerCase(), filePath, acceptEncoding);
  } catch {
    try {
      const html = await readFile(join(DIST, 'index.html'));
      serve(res, html, '.html', '/index.html', acceptEncoding);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  }
});

server.listen(PORT, () => {
  console.log(`KANTECH server running on port ${PORT}`);
});
