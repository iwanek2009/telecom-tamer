// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vaohntmycjzmxeghaugr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhb2hudG15Y2p6bXhlZ2hhdWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMzczNDcsImV4cCI6MjA1MjcxMzM0N30.n4yt0Nh9iSAhUe97XGGtmxbsTX3uCiwULwhLKkaR6dY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);