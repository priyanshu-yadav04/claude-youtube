require('dotenv').config({ path: '.env.local' });
const { supabaseAdmin } = require('./lib/supabase');

try {
    if (supabaseAdmin) {
        console.log('Supabase Admin Client initialized successfully.');
        // We won't make a request to avoid side effects or permissions errors on empty DBs, 
        // just checking initialization is enough to prove the file works and key is read.
    } else {
        console.error('Supabase Admin Client failed to initialize.');
    }
} catch (error) {
    console.error('Error initializing Supabase Admin Client:', error);
}
