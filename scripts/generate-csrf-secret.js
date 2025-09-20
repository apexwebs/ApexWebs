const crypto = require('crypto');

// Generate a secure random string for CSRF token
const csrfSecret = crypto.randomBytes(32).toString('hex');

console.log('\nGenerated CSRF Secret:');
console.log('====================');
console.log(csrfSecret);
console.log('\nAdd this to your Vercel environment variables as:');
console.log('CSRF_SECRET=' + csrfSecret);
console.log('====================\n');