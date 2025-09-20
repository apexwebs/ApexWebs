const crypto = require('crypto');

// Generate a random 64-byte (512-bit) secret key
const secret = crypto.randomBytes(64).toString('hex');
console.log('Your new JWT_SECRET:', secret);