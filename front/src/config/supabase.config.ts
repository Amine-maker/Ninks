import { envLocal } from "@/core/utils/constante";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(envLocal.VITE_SUPABASE_PROJECT, envLocal.VITE_SUPABASE_ANON);
