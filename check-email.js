import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function checkEmail() {
  console.log('🔍 Checking for sunjookat@gmail.com in database...\n');

  const { data, error } = await supabase
    .from('email_signups')
    .select('*')
    .eq('email', 'sunjookat@gmail.com');

  if (error) {
    console.log('❌ Error:', error.message);
    return;
  }

  if (data && data.length > 0) {
    console.log('✅ Email found! Details:');
    console.log(JSON.stringify(data[0], null, 2));
  } else {
    console.log('❌ Email not found in database');
  }
}

checkEmail();
