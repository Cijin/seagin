import { kv } from '@vercel/kv';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define a type for the request body
type RequestBody = {
  email: string;
};

// Define a type for the response data
type ResponseData = {
  message: string;
} | {
  error: string;
};

export default async function Subscribe(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {

      // Extract email from the request body
      const { email } = req.body as RequestBody;

      // Save the email in KV
      await kv.set(email, 'subscribed');

      res.status(200).json({ message: 'Email saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving email' });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

