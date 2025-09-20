const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const fs = require('fs');

async function setupAuth() {
    const password = 'ApexAdmin2025!';
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    const jwtSecret = crypto.randomBytes(32).toString('hex');

    const envContent = `# Admin Authentication
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=${hash}
JWT_SECRET=${jwtSecret}

# Security Settings
SESSION_DURATION=86400000
MAX_LOGIN_ATTEMPTS=5
LOGIN_BLOCK_DURATION=900000
`;

    // Write to both .env and .env.local for development
    fs.writeFileSync('.env', envContent);
    fs.writeFileSync('.env.local', envContent);

    console.log('\nCredentials have been updated!');
    console.log('============================');
    console.log('Username: admin');
    console.log('Password: ApexAdmin2025!');
    console.log('============================\n');
}

setupAuth().catch(console.error);