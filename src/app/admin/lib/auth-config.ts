export const AUTH_CONFIG = {
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
    CREDENTIALS: {
        username: 'admin',
        passwordHash: '$2b$10$HkzAeQyw8q8bWy1UMbNPMOHegfAcSOCPmR4DrWSpUsMyBDukUoZ0C' // Hash for 'admin123'
    },
    COOKIE: {
        name: 'adminToken',
        options: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax' as const,
            path: '/',
            maxAge: 24 * 60 * 60 // 24 hours
        }
    }
};