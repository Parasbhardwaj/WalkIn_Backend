const crypto = require('crypto');

// Generate a 256-bit (32-byte) secret key
const accessSecretKey = crypto.randomBytes(32).toString('hex');

const refreshSecretKey = crypto.randomBytes(32).toString('hex');

console.log('Generated Access Secret Key:', accessSecretKey);
console.log('Generated Refresh Secret Key:', refreshSecretKey);