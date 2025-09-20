const bcrypt = require('bcryptjs');
const fs = require('fs');

async function setupAndVerifyAuth() {
    // Set up credentials
    const username = 'admin';
    const password = 'admin123';  // Using a simple password for testing
    
    // Generate hash
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    
    // Create environment content
    const envContent = `# Admin Authentication
ADMIN_USERNAME=${username}
ADMIN_PASSWORD_HASH=${hash}
JWT_SECRET=secure-jwt-secret-key-2025

# Security Settings
SESSION_DURATION=86400000
MAX_LOGIN_ATTEMPTS=5
LOGIN_BLOCK_DURATION=900000
`;

    // Write to both .env and .env.local
    fs.writeFileSync('.env', envContent);
    fs.writeFileSync('.env.local', envContent);

    // Verify the hash
    const isValid = await bcrypt.compare(password, hash);
    
    console.log('\nCredentials Setup Complete!');
    console.log('==========================');
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('\nVerification:', isValid ? 'PASSED ✓' : 'FAILED ✗');
    console.log('==========================\n');
}

setupAndVerifyAuth().catch(console.error);