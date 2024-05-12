import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bgwvxmsitkirzzcdsywt.supabase.co';

// Access Supabase key securely using environment variables
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseKey) {
    throw new Error('Missing REACT_APP_SUPABASE_KEY environment variable');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
