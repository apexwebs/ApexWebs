# Apex Webs - Cursor AI Development Rules
*Comprehensive guidelines for building a professional, SEO-optimized Kenyan web solutions platform*

## � Unified Color Theme (2025)

### Main Colors
- **Teal Gradient (Header/Card Background):**
  - Start: #1DB7A4
  - End: #0F7C91
- **Accent Red (Top border glow, alerts, CTA hover):** #E94E4E
- **White (Card/Section Background):** #FFFFFF

### Text Colors
- **Title Text:** #1E9E8A (deep teal green)
- **Body Text:** #4F4F4F (dark gray)

### CSS Variables
```css
:root {
  --primary-gradient-start: #1DB7A4;
  --primary-gradient-end: #0F7C91;
  --accent-red: #E94E4E;
  --background-white: #FFFFFF;
  --text-title: #1E9E8A;
  --text-body: #4F4F4F;
}
```

#### Usage Tips
- Use the gradient for navbars, headers, and CTA buttons.
- Accent red for hover states or alerts.
- White for cards or background sections.
- Dark gray for paragraph text and teal green for headings.
- The theme should appear across all pages and components for a unified brand experience.

## �🎯 Project Overview & Context

### Company Identity
- **Company**: Apex Webs - Kenyan web solutions startup
- **Domain**: apexwebs.co.ke ✅ ACQUIRED
- **Mission**: Provide innovative, user-centric web solutions for Kenyan businesses
- **Motto**: "Pamoja Tunaweza" (Together We Can)
- **Target Market**: SMEs, schools, startups in Kenya

### MVP Strategy
- **Phase 1**: Vercel free tier with 3 core services + 3 "coming soon" services
- **Tech Stack**: Next.js 14, React 18, Tailwind CSS, Vercel KV, Postgres
- **Primary Goal**: Generate 25+ qualified leads per month within 6 months

---

## 🏗️ Code Architecture & Structure Rules

### 1. Project Structure (Enforced)
```
src/
├── app/                    # Next.js 14 App Router
│   ├── (pages)/           # Route groups for organization
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (buttons, inputs, etc.)
│   ├── sections/         # Page section components
│   ├── forms/            # Form components
│   └── shared/           # Shared components (header, footer, etc.)
├── lib/                  # Utility functions and configurations
│   ├── utils.ts          # General utilities
│   ├── validations.ts    # Form validation schemas
│   ├── constants.ts      # App constants
│   └── types.ts          # TypeScript type definitions
├── hooks/                # Custom React hooks
├── data/                 # Static data and content
└── public/               # Static assets
    ├── images/
    ├── icons/
    └── documents/
```

### 2. File Naming Conventions
- **Components**: PascalCase (`ContactForm.tsx`, `ServiceCard.tsx`)
- **Pages**: kebab-case for URLs (`about-us`, `web-hosting`)
- **Utilities**: camelCase (`formatPhone.ts`, `sendEmail.ts`)
- **Constants**: UPPER_SNAKE_CASE (`KENYAN_COUNTIES`, `SERVICE_TYPES`)
- **Types**: PascalCase with descriptive names (`ContactFormData`, `LeadScoreData`)

---

## 📝 Code Documentation Standards

### 1. Component Documentation Template
```typescript
/**
 * ServiceCard Component
 * 
 * Displays a service offering with icon, title, description, and CTA button.
 * Used on homepage and services overview page.
 * 
 * @param service - Service data object containing title, description, etc.
 * @param isComingSoon - Boolean to show "Coming Soon" state
 * @param priority - For image loading optimization (above fold vs below fold)
 * 
 * @example
 * <ServiceCard 
 *   service={webHostingService} 
 *   isComingSoon={false}
 *   priority={true}
 * />
 */
export function ServiceCard({ service, isComingSoon = false, priority = false }) {
  // Component implementation
}
```

### 2. Function Documentation
```typescript
/**
 * Calculates lead score based on form submission data
 * Higher scores indicate more qualified leads for Kenyan market
 * 
 * Scoring criteria:
 * - Budget >KES 50,000: +20 points
 * - Urgent timeline: +15 points
 * - Has company name: +10 points
 * - Custom project type: +15 points
 * 
 * @param formData - Contact form submission data
 * @returns Lead score (0-100, higher = better qualified)
 */
export function calculateLeadScore(formData: ContactFormData): number {
  // Implementation with inline comments explaining each scoring rule
}
```

### 3. Inline Comments Guidelines
```typescript
// ✅ Good: Explains WHY, not WHAT
// Convert to Kenya timezone for local business hours check
const kenyaTime = new Date().toLocaleString("en-US", {timeZone: "Africa/Nairobi"});

// ✅ Good: Explains business logic
// SMEs typically have smaller budgets, so we weigh company presence heavily
if (formData.company && formData.budget === 'small') {
  score += 15; // Serious small business inquiry
}

// ❌ Avoid: Obvious comments
// Increment counter by 1
counter++;
```

---

## 🇰🇪 Kenyan Localization Rules

### 1. Content Localization
```typescript
// Constants for Kenyan market specifics
export const KENYAN_CONSTANTS = {
  CURRENCY: 'KES',
  PHONE_PREFIX: '+254',
  BUSINESS_HOURS: '8:00 AM - 6:00 PM EAT',
  COUNTIES: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', /* ... */],
  LANGUAGES: ['English', 'Swahili'],
  PAYMENT_METHODS: ['M-PESA', 'Airtel Money', 'Bank Transfer', 'Cash'],
  BUSINESS_REGISTRATION: 'Business Registration Number (e.g., BRS/2024/123456)'
};

// Kenyan-specific validation
export const validateKenyanPhone = (phone: string): boolean => {
  // Accepts: +254, 254, 07XX, 01XX formats
  const kenyanPhoneRegex = /^(\+254|254|0)?[17]\d{8}$/;
  return kenyanPhoneRegex.test(phone.replace(/\s/g, ''));
};
```

### 2. Cultural Considerations
```typescript
// Kenyan business culture considerations
export const CULTURAL_CONSTANTS = {
  GREETING_HOURS: {
    MORNING: 'Good morning', // 6 AM - 12 PM
    AFTERNOON: 'Good afternoon', // 12 PM - 6 PM  
    EVENING: 'Good evening' // 6 PM - 10 PM
  },
  FORMAL_TITLES: ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.', 'Hon.'],
  BUSINESS_RELATIONSHIP: 'relationship-first', // Build trust before selling
  COMMUNICATION_STYLE: 'respectful-direct' // Polite but clear
};
```

---

## 🚀 SEO Optimization Rules

### 1. Metadata Template (Required for every page)
```typescript
// app/layout.tsx or page-specific metadata
export const metadata: Metadata = {
  title: 'Apex Webs | Professional Web Solutions in Kenya | Custom Websites & Apps',
  description: 'Leading Kenyan web development company offering custom websites, web applications, hosting, and API integrations. Serving SMEs, schools, and startups across Kenya. Get your quote today!',
  keywords: [
    'web development Kenya',
    'website design Nairobi', 
    'custom web applications Kenya',
    'web hosting Kenya',
    'M-PESA integration',
    'Kenyan web developers',
    'SME websites Kenya',
    'school management systems Kenya'
  ],
  authors: [{ name: 'Apex Webs Team' }],
  creator: 'Apex Webs',
  publisher: 'Apex Webs',
  alternates: {
    canonical: 'https://apexwebs.co.ke',
  },
  openGraph: {
    title: 'Apex Webs - Professional Web Solutions in Kenya',
    description: 'Transform your Kenyan business with professional web solutions. Custom websites, applications, and hosting services.',
    url: 'https://apexwebs.co.ke',
    siteName: 'Apex Webs',
    images: [{
      url: 'https://apexwebs.co.ke/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Apex Webs - Kenyan Web Solutions Company'
    }],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Webs - Professional Web Solutions in Kenya',
    description: 'Leading Kenyan web development company serving SMEs, schools, and startups.',
    images: ['https://apexwebs.co.ke/images/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### 2. Structured Data Implementation
```typescript
/**
 * Generate JSON-LD structured data for better search visibility
 * Focuses on LocalBusiness and WebSite schemas for Kenyan market
 */
export function generateStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apex Webs",
    "description": "Professional web solutions for Kenyan businesses",
    "url": "https://apexwebs.co.ke",
    "telephone": "+254-XXX-XXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE",
      "addressRegion": "Mombasa County",
      "addressLocality": "Mombasa"
    },
    "areaServed": "Kenya",
    "serviceArea": {
      "@type": "Country",
      "name": "Kenya"
    },
    "sameAs": [
      "https://www.facebook.com/apexwebs.co.ke",
      "https://www.linkedin.com/company/apex-webs-kenya"
    ]
  };
  
  return organizationSchema;
}
```

### 3. Performance-First SEO
```typescript
// Image optimization for Kenyan internet speeds
export const IMAGE_CONFIG = {
  FORMATS: ['webp', 'jpeg'], // WebP first, JPEG fallback
  SIZES: {
    MOBILE: '(max-width: 768px) 100vw',
    TABLET: '(max-width: 1024px) 50vw', 
    DESKTOP: '33vw'
  },
  QUALITY: 85, // Balance quality vs load time for slower connections
  LAZY_LOADING: true, // Essential for mobile data usage
  PLACEHOLDER: 'blur' // Better UX during loading
};

// Core Web Vitals optimization
export const PERFORMANCE_RULES = {
  LCP_TARGET: 2.5, // Largest Contentful Paint under 2.5s
  FID_TARGET: 100, // First Input Delay under 100ms
  CLS_TARGET: 0.1, // Cumulative Layout Shift under 0.1
  TTI_TARGET: 3.8  // Time to Interactive under 3.8s (mobile)
};
```

---

## 📱 Mobile-First & Responsive Design Rules

### 1. Breakpoint Strategy
```typescript
// Tailwind breakpoints optimized for Kenyan device usage
export const BREAKPOINTS = {
  mobile: '320px',    // Entry-level smartphones
  mobileLg: '480px',  // Standard smartphones  
  tablet: '768px',    // Tablets and large phones
  desktop: '1024px',  // Desktop and laptops
  desktopXl: '1440px' // Large screens
};

// Usage in components
className="text-sm mobile:text-base tablet:text-lg desktop:text-xl"
```

### 2. Touch-Friendly Design
```typescript
// Minimum touch target sizes for mobile users
export const TOUCH_TARGETS = {
  MIN_SIZE: '44px',     // Apple/Google recommended minimum
  COMFORTABLE: '48px',   // More comfortable for all users
  BUTTON_HEIGHT: '52px', // Form buttons and CTAs
  INPUT_HEIGHT: '56px'   // Form inputs for easy typing
};

// Apply to all interactive elements
className="min-h-[52px] min-w-[44px] touch-manipulation"
```

---

## 🔒 Security & Data Protection Rules

### 1. Form Security Implementation
```typescript
/**
 * Secure contact form handler
 * Implements CSRF protection, rate limiting, and data validation
 * Complies with Kenya Data Protection Act requirements
 */
export async function handleContactForm(formData: ContactFormData) {
  // 1. Rate limiting - prevent spam submissions
  const clientIP = getClientIP();
  await checkRateLimit(clientIP, { max: 5, window: '1h' });
  
  // 2. Input validation and sanitization
  const validatedData = await validateAndSanitize(formData);
  
  // 3. CSRF token verification
  await verifyCsrfToken(formData.csrfToken);
  
  // 4. Store with encryption for sensitive data
  await storeLeadSecurely(validatedData);
  
  // 5. Send notifications
  await sendNotifications(validatedData);
}
```

### 2. Privacy Compliance
```typescript
// Kenya Data Protection Act compliance
export const PRIVACY_CONFIG = {
  DATA_RETENTION: {
    LEADS: '2 years',           // Business leads retention
    ANALYTICS: '14 months',     // Google Analytics data
    COOKIES: '1 year',          // Cookie consent duration
    EMAILS: '3 years'           // Email communications
  },
  CONSENT_REQUIRED: [
    'marketing_emails',
    'analytics_tracking', 
    'performance_cookies'
  ],
  DATA_MINIMIZATION: true,      // Collect only necessary data
  ENCRYPTION_REQUIRED: ['email', 'phone', 'company_details']
};
```

---

## 🎨 UI/UX Design Rules

### 1. Design System
```typescript
// Apex Webs Brand Colors (inspired by Kenyan heritage)
export const BRAND_COLORS = {
  primary: {
    50: '#f0f9ff',   // Light blue (sky)
    500: '#0ea5e9',  // Primary blue (ocean)
    600: '#0284c7',  // Darker blue
    900: '#0c4a6e'   // Navy blue
  },
  accent: {
    50: '#fef7ee',   // Light orange (sunrise)
    500: '#f97316',  // Kenyan sunset orange
    600: '#ea580c'   // Deeper orange
  },
  success: '#16a34a', // Green (Kenyan flag)
  warning: '#eab308', // Yellow (sun)
  error: '#dc2626'    // Red (attention)
};

// Typography scale
export const TYPOGRAPHY = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    heading: ['Inter', 'system-ui', 'sans-serif']
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px  
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem'   // 36px
  }
};
```

### 2. Component Consistency Rules
```typescript
/**
 * Button component with consistent styling
 * Supports different variants while maintaining brand consistency
 */
export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500',
    secondary: 'bg-white hover:bg-gray-50 text-primary-600 border border-primary-200 focus:ring-primary-500',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm min-h-[40px]',
    md: 'px-4 py-3 text-base min-h-[48px]',
    lg: 'px-6 py-4 text-lg min-h-[56px]'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

---

## 📊 Analytics & Tracking Rules

### 1. Event Tracking Strategy
```typescript
/**
 * Track user interactions for business intelligence
 * Focus on lead generation and conversion funnel
 */
export const TRACKING_EVENTS = {
  // Lead generation events
  FORM_STARTED: 'contact_form_started',
  FORM_COMPLETED: 'contact_form_submitted', 
  FORM_ABANDONED: 'contact_form_abandoned',
  
  // Service interest events  
  SERVICE_VIEWED: 'service_page_viewed',
  SERVICE_CTA_CLICKED: 'service_cta_clicked',
  PHONE_CLICKED: 'phone_number_clicked',
  EMAIL_CLICKED: 'email_address_clicked',
  
  // Engagement events
  BLOG_READ: 'blog_article_read',
  CASE_STUDY_VIEWED: 'case_study_viewed',
  TESTIMONIAL_CLICKED: 'testimonial_expanded'
};

// Track with context for better insights
export function trackEvent(event: string, properties?: Record<string, any>) {
  // Google Analytics 4
  gtag('event', event, {
    page_title: document.title,
    page_location: window.location.href,
    ...properties
  });
  
  // Custom analytics for lead scoring
  if (event.includes('form') || event.includes('service')) {
    storeCustomEvent(event, properties);
  }
}
```

### 2. Performance Monitoring
```typescript
/**
 * Monitor Core Web Vitals and custom metrics
 * Essential for SEO and user experience in Kenya
 */
export function initializePerformanceMonitoring() {
  // Core Web Vitals
  getCLS(onCLS);
  getFID(onFID);  
  getFCP(onFCP);
  getLCP(onLCP);
  getTTFB(onTTFB);
  
  // Custom metrics for Kenyan context
  measureCustomMetrics({
    'form_load_time': () => measureFormLoadTime(),
    'image_load_time': () => measureImageLoadTime(), 
    'api_response_time': () => measureApiResponseTime()
  });
}
```

---

## 🧪 Testing Rules

### 1. Component Testing Template
```typescript
/**
 * Contact Form Component Tests
 * Covers functionality, validation, and accessibility
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '../ContactForm';

describe('ContactForm', () => {
  // Test basic rendering
  test('renders all required form fields', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });
  
  // Test Kenyan phone validation
  test('validates Kenyan phone numbers correctly', async () => {
    render(<ContactForm />);
    
    const phoneInput = screen.getByLabelText(/phone/i);
    fireEvent.change(phoneInput, { target: { value: '0712345678' } });
    
    // Should accept valid Kenyan format
    await waitFor(() => {
      expect(screen.queryByText(/invalid phone/i)).not.toBeInTheDocument();
    });
  });
  
  // Test form submission
  test('submits form with valid data', async () => {
    const mockSubmit = jest.fn();
    render(<ContactForm onSubmit={mockSubmit} />);
    
    // Fill valid form data
    fireEvent.change(screen.getByLabelText(/name/i), { 
      target: { value: 'John Doe' } 
    });
    // ... fill other fields
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(expect.objectContaining({
        name: 'John Doe'
      }));
    });
  });
});
```

### 2. Integration Testing
```typescript
/**
 * Lead generation flow integration test
 * Tests entire user journey from form to database
 */
test('complete lead generation flow', async () => {
  // 1. User visits contact page
  const { user } = renderWithProviders(<ContactPage />);
  
  // 2. Fills out form
  await user.type(screen.getByLabelText(/name/i), 'Test User');
  await user.type(screen.getByLabelText(/email/i), 'test@example.com');
  await user.selectOptions(screen.getByLabelText(/project type/i), 'website');
  
  // 3. Submits form
  await user.click(screen.getByRole('button', { name: /submit/i }));
  
  // 4. Verify success message
  await waitFor(() => {
    expect(screen.getByText(/thank you/i)).toBeInTheDocument();
  });
  
  // 5. Verify lead stored in database
  const leads = await getLeadsFromDb();
  expect(leads).toContainEqual(expect.objectContaining({
    email: 'test@example.com'
  }));
});
```

---

## 🚀 Deployment & Environment Rules

### 1. Environment Configuration
```typescript
// Environment variables structure
export const ENV_CONFIG = {
  // Vercel deployment
  VERCEL_URL: process.env.VERCEL_URL,
  VERCEL_ENV: process.env.VERCEL_ENV, // development, preview, production
  
  // Database
  POSTGRES_URL: process.env.POSTGRES_URL,
  KV_URL: process.env.KV_URL,
  KV_REST_API_URL: process.env.KV_REST_API_URL,
  KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
  
  // Email service
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  FROM_EMAIL: process.env.FROM_EMAIL || 'hello@apexwebs.co.ke',
  
  // Analytics
  GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  
  // Security
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  CSRF_SECRET: process.env.CSRF_SECRET
};

// Validation function
export function validateEnvironment() {
  const required = ['POSTGRES_URL', 'RESEND_API_KEY', 'NEXTAUTH_SECRET'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}
```

### 2. Build Optimization
```typescript
// next.config.js optimizations for Kenyan users
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/webp', 'image/jpeg'],
    minimumCacheTTL: 31536000, // 1 year cache
    deviceSizes: [320, 480, 768, 1024, 1440],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  
  // Compression
  compress: true,
  
  // PWA capabilities for mobile users
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options', 
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ];
  }
};
```

---

## 📈 Success Metrics & Monitoring

### 1. Business KPIs to Track
```typescript
/**
 * Track business-critical metrics for Apex Webs success
 * Align with PRD objectives of 25+ leads per month
 */
export const BUSINESS_METRICS = {
  LEAD_GENERATION: {
    target: 25,              // Leads per month
    current: 0,              // Track progress
    conversion_rate: 0.03,   // 3% target conversion rate
    quality_score: 15        // Average lead score target
  },
  
  PERFORMANCE: {
    bounce_rate: 65,         // Max 65% bounce rate
    session_duration: 150,   // Min 2.5 minutes
    pages_per_session: 3.5,  // Target pages per visit
    mobile_usage: 70         // Expected mobile traffic %
  },
  
  BUSINESS_GOALS: {
    monthly_visitors: 1500,  // Phase 1 target
    email_signups: 60,       // 15 per week target
    service_inquiries: 120,  // 30 per week target
    meeting_bookings: 30     // 25% of qualified leads
  }
};

// Function to calculate success rate
export function calculateSuccessMetrics(currentData: any) {
  return {
    lead_gen_success: (currentData.leads / BUSINESS_METRICS.LEAD_GENERATION.target) * 100,
    performance_score: calculatePerformanceScore(currentData),
    growth_rate: calculateMonthOverMonthGrowth(currentData)
  };
}
```

---

## 🎯 Final Implementation Checklist

### Phase 1 MVP Requirements
- [ ] **Homepage**: Hero section, 6 service cards, testimonials, contact CTA
- [ ] **Service Pages**: 3 detailed service pages + 3 "coming soon" pages
- [ ] **Contact System**: Form with validation, email notifications, lead scoring
- [ ] **SEO Foundation**: Metadata, structured data, sitemap, robots.txt
- [ ] **Analytics**: GA4 setup, custom event tracking, performance monitoring
- [ ] **Mobile Optimization**: Responsive design, touch-friendly interface
- [ ] **Security**: HTTPS, security headers, form protection, privacy compliance
- [ ] **Performance**: Image optimization, caching, Core Web Vitals <2.5s LCP
- [ ] **Content**: Legal pages, blog setup, Kenyan-focused copy
- [ ] **Lead Management**: Vercel KV integration, automated responses

### Code Quality Gates
- [ ] **TypeScript**: Strict mode enabled, no `any` types
- [ ] **Testing**: >80% test coverage on critical paths
- [ ] **Documentation**: All components and functions documented
- [ ] **Accessibility**: WCAG 2.1 AA compliance
- [ ] **Performance**: Lighthouse score >90 on all metrics
- [ ] **SEO**: All pages have proper metadata and structured data
- [ ] **Security**: All forms protected, data encrypted, headers configured

---

## 💡 AI Cursor Best Practices

### 1. When Using Cursor AI
```markdown
## Prompt Engineering for Apex Webs

Always include context:
"Building for Apex Webs, a Kenyan web solutions company targeting SMEs, schools, and startups. Focus on local market needs, mobile-first design, and lead generation."

Request documentation:
"Please include detailed comments explaining the business logic, especially for Kenyan-specific features like phone validation and lead scoring."

Ask for testing:
"Generate comprehensive tests for this component, including edge cases for Kenyan users and form validation scenarios."

Optimize for performance:
"Optimize this for slower internet connections common in Kenya. Focus on Core Web Vitals and mobile performance."
```

### 2. Common Patterns to Request
```typescript
// Always ask Cursor to generate these patterns:

// 1. Form validation with Kenyan context
"Create a contact form with Kenyan phone validation, business registration fields, and proper error handling"

// 2. SEO-optimized page structure  
"Generate a service page with proper metadata, structured data, and mobile-optimized layout"

// 3. Performance-optimized components
"Create an image gallery component optimized for slow connections with lazy loading and WebP support"

// 4. Accessibility-first design
"Build a navigation component that's keyboard accessible and screen reader friendly"

// 5. Local business features
"Create a component to display Kenyan business hours, counties served, and local contact information"
```

---

## 🎉 Success Criteria

By following these rules, the Apex Webs project should achieve:

### Technical Excellence
- ✅ Clean, maintainable codebase that novices can understand
- ✅ Comprehensive documentation for all components and functions  
- ✅ >90 Lighthouse performance score across all metrics
- ✅ Mobile-first, responsive design optimized for Kenyan users
- ✅ Security best practices with Kenya Data Protection Act compliance

### Business Success
- ✅ Generate 25+ qualified leads per month within 6 months
- ✅ Achieve <65% bounce rate and >2.5 minute session duration
- ✅ Position as trusted web solutions provider in Kenyan market
- ✅ Convert 3% of visitors to leads with 25% meeting conversion rate
- ✅ Build scalable platform for Phase 2 expansion

### Market Impact
- ✅ Serve Kenyan SMEs, schools, and startups effectively
- ✅ Demonstrate "Pamoja Tunaweza" - collaborative success
- ✅ Create positive impact on Kenyan digital transformation
- ✅ Establish sustainable, profitable web solutions business

---

**Remember**: These rules prioritize clean code, excellent documentation, Kenyan market focus, mobile optimization, and business success. Every component should be built with the end user (Kenyan businesses) and developer experience in mind.

**Pamoja Tunaweza** - Together we can build an exceptional web platform! 🚀

---

## 🆕 Additional Project Rules (2024 AI Review)

### 1. Per-Page Metadata
- Every page must define its own metadata for SEO, including title, description, and keywords.
- Use Next.js metadata API or export a `metadata` object per page.

### 2. OpenGraph & Twitter Meta Tags
- All main pages should include OpenGraph and Twitter meta tags for rich social sharing.
- Use the structure provided in the rules above for consistency.

### 3. Legal & Compliance Pages
- The site must include Privacy Policy, Terms of Service, and a compliance statement for the Kenyan market.
- These should be accessible from the footer.

### 4. Automated Testing
- Implement automated tests for critical flows (contact form, navigation, service links).
- Use Jest and React Testing Library or Playwright for E2E.

### 5. Lead Storage
- Contact form submissions must be stored securely (e.g., Vercel KV, Postgres, or another backend).
- Do not rely solely on email for lead capture.

### 6. Analytics
- Integrate Google Analytics (GA4) for traffic and conversion tracking.
- Respect user privacy and provide cookie consent if required.

### 7. Accessibility
- All forms and navigation must be accessible (ARIA labels, keyboard navigation, color contrast).
- Use tools like axe or Lighthouse to audit accessibility.

### 8. Performance Optimization
- Use Next.js image optimization and check Core Web Vitals.
- Optimize for both mobile and desktop (especially legibility on wide screens).

---
