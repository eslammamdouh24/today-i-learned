import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zswlbvukekydisnhlwyt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzd2xidnVrZWt5ZGlzbmhsd3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTkwMjcsImV4cCI6MjA2ODc3NTAyN30.bnciW7SwCNO4Aur1wE1d_duXB1Cs6dLIsNIk6cmbfB8";

export const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
