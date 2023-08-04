import { createClient } from '@supabase/supabase-js'
  import { Auth } from '@supabase/auth-ui-react'
  import { ThemeSupa } from '@supabase/auth-ui-shared'

const SUPABASE_URL= 'https://afjuguofgichqglbcqcu.supabase.co'
const SUPABASE_PUBLIC_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmanVndW9mZ2ljaHFnbGJjcWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMzA2MjcsImV4cCI6MjAwNjcwNjYyN30.ZqtRG-gOrP-N3vm_SHt8BI6qWJvTzqlZIFihv5lfhlc'


//if (!SUPABASE_URL || !SUPABASE_PUBLIC_KEY) {
// throw new Error('Supabase URL or public key is missing.');
//}

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
