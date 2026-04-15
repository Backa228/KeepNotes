import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fffvxcxfhojihpjdpucf.supabase.co";
const supabaseKey = "sb_publishable_uiwAApthYNmM5H8LHgEYYA_Iogm7p7S";

export const supabase = createClient(supabaseUrl, supabaseKey);