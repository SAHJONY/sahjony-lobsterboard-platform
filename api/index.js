// Vercel serverless function for TanStack Start SSR
// This exports a Vercel-compatible handler

export default async function handler(req, res) {
  try {
    // Import the server dynamically
    const { server } = await import('./dist/server/server.js');
    
    // Convert Vercel request to Fetch API request
    const url = new URL(req.url || '/', `http://${req.headers.host}`);
    
    const fetchReq = new Request(url.toString(), {
      method: req.method,
      headers: new Headers(req.headers),
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    });

    // Handle request with TanStack Start SSR
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
}