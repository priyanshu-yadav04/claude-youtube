
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read .env.local manually since we're running a standalone script
const envPath = path.resolve(__dirname, '../.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

const env = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        env[key.trim()] = value.trim();
    }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Error: Missing Supabase URL or Service Role Key in .env.local');
    process.exit(1);
}

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key (first 10 chars):', supabaseKey.substring(0, 10) + '...');

const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

async function testConnection() {
    console.log('Testing connection...');
    const { data, error } = await supabase.from('users').select('count', { count: 'exact', head: true });

    if (error) {
        console.error('Connection failed:', error);
    } else {
        console.log('Connection successful!');
        console.log('Users count:', data); // data is null for head: true, but error being null confirms access
    }

    // Try a simple insert if table exists
    console.log('Attempting verify table structure...');
    const { error: tableError } = await supabase.from('users').select('id').limit(1);
    if (tableError) {
        console.error('Table verification failed:', tableError);
    } else {
        console.log('Table structure verified.');
    }
}

testConnection();
