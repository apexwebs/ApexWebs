const bcrypt = require('bcryptjs');

// New credentials to set
const newUsername = 'apex_admin';  // Change this to your desired username
const newPassword = 'SecurePass2025!';  // Change this to your desired password

// Generate password hash
bcrypt.genSalt(12, (err, salt) => {
    bcrypt.hash(newPassword, salt, (err, hash) => {
        console.log('\nNew Credentials Generated:');
        console.log('------------------------');
        console.log('Username:', newUsername);
        console.log('Password Hash:', hash);
        console.log('\nAdd these to your .env.local file:');
        console.log('------------------------');
        console.log('ADMIN_USERNAME="' + newUsername + '"');
        console.log('ADMIN_PASSWORD_HASH="' + hash + '"');
    });
});
