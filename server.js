// Express server wrapper for TanStack Start SSR
// This provides a proper HTTP server for Vercel

import express from 'express';
import { server } from './dist/server/server.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Convert Express request to Fetch API request
app.all('*', async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    
    const fetchReq = new Request(url.toString(), {
      method: req.method,
      headers: new Headers(req.headers),
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    });

    const response = await server.fetch(fetchReq);
    
    // Set status
    res.status(response.status);
    
    // Set headers
    for (const [key, value] of response.headers) {
      res.setHeader(key, value);
    }
    
    // Send body
    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`TanStack Start SSR server running on port ${PORT}`);
});