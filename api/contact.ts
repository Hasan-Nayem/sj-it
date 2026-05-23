import type { VercelRequest, VercelResponse } from '@vercel/node';

// Disable Vercel's default body parser so we can stream the raw
// multipart/form-data body directly through to Forminit.
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const formId = process.env.FORMINIT_ID;
  if (!formId) {
    console.error('FORMINIT_ID environment variable is not set.');
    return res.status(500).json({ success: false, message: 'Server configuration error.' });
  }

  try {
    // Read the raw request body into a Buffer so we can forward it
    // with the original Content-Type header (which contains the multipart boundary).
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    const rawBody = Buffer.concat(chunks);

    // Proxy the raw multipart body straight to Forminit
    const forminitResponse = await fetch(`https://forminit.com/f/${formId}`, {
      method: 'POST',
      body: rawBody,
      headers: {
        // Must forward the Content-Type so Forminit sees the multipart boundary
        'Content-Type': req.headers['content-type'] ?? 'multipart/form-data',
        'Accept': 'application/json',
      },
    });

    if (forminitResponse.ok) {
      return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    }

    // Surface Forminit's own error message if available
    const data = await forminitResponse.json().catch(() => ({})) as Record<string, unknown>;
    return res
      .status(forminitResponse.status)
      .json({ success: false, message: (data.message as string) || 'Failed to send message.' });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error.';
    console.error('Contact proxy error:', error);
    return res.status(500).json({ success: false, message });
  }
}
