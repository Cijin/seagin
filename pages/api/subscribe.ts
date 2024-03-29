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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log(req.body)
  try {
    // Extract email from the request body
    const { email } = req.body as RequestBody;

    // Save the email in KV
    await kv.set(email, 'subscribed');

    res.status(200).json({ message: 'Email saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving email' });
  }
} 
