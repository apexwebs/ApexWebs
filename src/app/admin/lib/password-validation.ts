export interface PasswordValidationResult {
    isValid: boolean;
    errors: string[];
}

export function validatePassword(password: string): PasswordValidationResult {
    const errors: string[] = [];

    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }

    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    }

    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
    }

    if (!/[0-9]/.test(password)) {
        errors.push('Password must contain at least one number');
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push('Password must contain at least one special character');
    }

    // Check for common patterns
    if (/password/i.test(password)) {
        errors.push('Password cannot contain the word "password"');
    }

    if (/12345/.test(password)) {
        errors.push('Password cannot contain sequential numbers');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}