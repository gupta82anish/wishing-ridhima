import { createClient } from '@supabase/supabase-js'

export function createReadClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !anonKey) throw new Error('Supabase env vars missing')
  return createClient(url, anonKey, { auth: { persistSession: false } })
}