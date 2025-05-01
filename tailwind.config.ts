import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        'amana-green': '#008000',
        'amana-gold': '#FFD700',
        'amana-white': '#FFFFFF',
        // Secondary Palette
        'amana-charcoal': '#333333',
        'amana-soft-grey': '#F5F5F5',
        // Accent Palette
        'amana-teal': '#006666',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        'playfair': ['var(--font-playfair-display)', 'Georgia', 'serif'],
        'montserrat': ['var(--font-montserrat)', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Mobile-first responsive typography
        'h1': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 32px base
        'h2': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 28px base
        'h3': ['1.375rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }], // 22px base
        'body': ['1rem', { lineHeight: '1.6' }], // 16px base
        'subheading': ['1.125rem', { lineHeight: '1.5' }], // 18px base
        'button': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }], // 14px base

        // Responsive sizes for md breakpoint (tablets)
        'md-h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 40px
        'md-h2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 32px
        'md-h3': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }], // 24px
        'md-body': ['1.0625rem', { lineHeight: '1.6' }], // 17px

        // Responsive sizes for lg breakpoint (desktops)
        'lg-h1': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 48px
        'lg-h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 36px
        'lg-h3': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 28px
        'lg-body': ['1.125rem', { lineHeight: '1.6' }], // 18px
      },
      spacing: {
        'section-sm': '2rem', // 32px
        'section-md': '4rem', // 64px
        'section-lg': '6rem', // 96px
        'gap-sm': '0.5rem', // 8px
        'gap-md': '1rem',  // 16px
        'gap-lg': '2rem',  // 32px
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
        screens: {
          sm: '640px', // Mobile (larger)
          md: '768px', // Tablet
          lg: '1024px', // Small desktop
          xl: '1280px', // Desktop
          '2xl': '1536px', // Large desktop
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-in-out',
        'slide-in-right': 'slideInRight 0.8s ease-in-out',
        'slide-in-left': 'slideInLeft 0.8s ease-in-out',
        'pulse': 'pulse 1s infinite',
        'scale': 'scale 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
