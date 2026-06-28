import { createClient } from '@supabase/supabase-js';
import { PostHog } from 'posthog-node';

const posthog = new PostHog(process.env.POSTHOG_API_KEY, {
  host: process.env.POSTHOG_HOST,
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, type, kit, answers } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const { error } = await supabase.from('email_signups').insert({
    email: email.toLowerCase().trim(),
    type,
    kit,
    answers,
  });

  if (error) {
    // Unique constraint violation — email already exists
    if (error.code === '23505') {
      return res.status(200).json({ ok: true });
    }
    console.error('Supabase insert error:', error);
    return res.status(500).json({ error: 'Failed to save email' });
  }

  posthog.capture({
    distinctId: email.toLowerCase().trim(),
    event: 'email_signup_server',
    properties: { type, kit, answers },
  });
  await posthog.flushAsync();

  return res.status(200).json({ ok: true });
}
