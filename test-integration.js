import { createClient } from '@supabase/supabase-js';
import { PostHog } from 'posthog-node';
import * as dotenv from 'dotenv';

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const POSTHOG_API_KEY = process.env.POSTHOG_API_KEY;
const POSTHOG_HOST = process.env.POSTHOG_HOST;

console.log('🧪 Testing Coffee Quiz Integration\n');

// Check environment variables
console.log('📋 Environment Check:');
console.log(`  PostHog API Key: ${POSTHOG_API_KEY ? '✅ Configured' : '❌ Missing'}`);
console.log(`  PostHog Host: ${POSTHOG_HOST ? '✅ Configured' : '❌ Missing'}`);
console.log(`  Supabase URL: ${SUPABASE_URL ? '✅ Configured' : '❌ Missing'}`);
console.log(`  Supabase Key: ${SUPABASE_SERVICE_ROLE_KEY ? '✅ Configured' : '❌ Missing'}`);

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.log('\n❌ Supabase credentials missing. Please add to .env:');
  console.log('  SUPABASE_URL=your_url');
  console.log('  SUPABASE_SERVICE_ROLE_KEY=your_key');
  process.exit(1);
}

const posthog = new PostHog(POSTHOG_API_KEY, {
  host: POSTHOG_HOST,
});

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Test Supabase connection
console.log('\n🔗 Testing Supabase Connection:');
try {
  const { data, error } = await supabase.from('email_signups').select('count').limit(1);
  if (error) {
    console.log(`  ❌ Error: ${error.message}`);
  } else {
    console.log('  ✅ Supabase connection successful');
  }
} catch (err) {
  console.log(`  ❌ Connection error: ${err.message}`);
}

// Test Supabase insert
console.log('\n📝 Testing Supabase Insert:');
const testEmail = `test-${Date.now()}@example.com`;
try {
  const { data, error } = await supabase.from('email_signups').insert({
    email: testEmail,
    type: 'guide',
    kit: 'The Confident Beginner Kit',
    answers: { 0: 'espresso', 1: 'mid', 2: 'medium', 3: 'quality', 4: 'beginner' }
  });

  if (error) {
    console.log(`  ❌ Insert error: ${error.message}`);
  } else {
    console.log(`  ✅ Email saved: ${testEmail}`);
  }
} catch (err) {
  console.log(`  ❌ Error: ${err.message}`);
}

// Test PostHog capture
console.log('\n📊 Testing PostHog Events:');
try {
  posthog.capture({
    distinctId: testEmail,
    event: 'test_quiz_completed',
    properties: {
      kit: 'The Confident Beginner Kit',
      test: true
    }
  });
  posthog.flush();
  console.log('  ✅ Quiz completed event captured');
} catch (err) {
  console.log(`  ❌ Error: ${err.message}`);
}

try {
  posthog.capture({
    distinctId: testEmail,
    event: 'test_waitlist_signup',
    properties: {
      type: 'guide',
      test: true
    }
  });
  posthog.flush();
  console.log('  ✅ Waitlist signup event captured');
} catch (err) {
  console.log(`  ❌ Error: ${err.message}`);
}

console.log('\n✅ Integration tests complete!');
console.log('\nNext steps:');
console.log('  1. Visit https://app.posthog.com to see captured events');
console.log('  2. Check your Supabase dashboard for saved emails');
console.log('  3. Run the quiz locally to test the full flow');

process.exit(0);
