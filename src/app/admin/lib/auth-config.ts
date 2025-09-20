export const AUTH_CONFIG = {
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
    CREDENTIALS: {
        username: 'admin',
        passwordHash: '$2b$12$QW/K30IbSyqvet7UjXB80.IADAboG1S8TPrh0Uj9yEkc.6yE2Z4oG' // Hash for 'Apex126$'
    },
    COOKIE: {
        name: 'adminToken',
        options: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict' as const,
            path: '/',
            maxAge: parseInt(process.env.SESSION_DURATION || '86400') || 24 * 60 * 60, // 24 hours default
            domain: process.env.COOKIE_DOMAIN || undefined, // Set this in production
            priority: 'high' as const
        }
    }
};