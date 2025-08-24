import { createClient } from '@supabase/supabase-js'

// ⚠️ copie do dashboard: Settings > API
const supabaseUrl = 'https://dhzmfbkiryhcrzccifro.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoem1mYmtpcnloY3J6Y2NpZnJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNjg3MzYsImV4cCI6MjA3MTY0NDczNn0.s2IZgIDvPgsdUg-TrOn6HYcj2na3_l4YkGivmpSeq9I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
