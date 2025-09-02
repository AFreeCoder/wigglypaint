/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        accent: '#F59E0B',
        // Template token colors mapped to CSS variables
        brand: 'var(--color-brand)',
        'brand-foreground': 'var(--color-brand-foreground)',
        bg: 'var(--color-bg)',
        card: 'var(--color-card)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        'gray-light': 'var(--color-gray-light)',
        'gray-dark': 'var(--color-gray-dark)',
      },
      fontFamily: {
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
} 
