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
        background: {
          primary: '#0a0a0f',
          secondary: '#0d0d14',
          tertiary: '#111118',
          card: 'rgba(15, 15, 22, 0.8)',
          'card-border': 'rgba(255, 255, 255, 0.06)',
        },
        accent: {
          primary: '#3b82f6',
          'primary-hover': '#2563eb',
          glow: 'rgba(59, 130, 246, 0.15)',
        },
        text: {
          primary: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.7)',
          muted: 'rgba(255, 255, 255, 0.5)',
          dim: 'rgba(255, 255, 255, 0.4)',
        },
        code: {
          background: '#0d1117',
          border: 'rgba(255, 255, 255, 0.08)',
          'syntax-blue': '#79c0ff',
          'syntax-purple': '#d2a8ff',
          'syntax-green': '#7ee787',
          'syntax-orange': '#ffa657',
          'syntax-gray': '#8b949e',
          'line-numbers': 'rgba(255, 255, 255, 0.3)',
        },
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "'SF Pro Display'", 'system-ui', 'sans-serif'],
        body: ["'Plus Jakarta Sans'", "'SF Pro Text'", 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono'", "'Fira Code'", 'monospace'],
      },
      fontSize: {
        'hero-title': 'clamp(2.5rem, 5vw, 4rem)',
        'section-title': 'clamp(1.75rem, 3vw, 2.5rem)',
      },
      spacing: {
        'section-padding': '120px',
      },
      borderRadius: {
        'button': '8px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'button': '0 4px 14px rgba(59, 130, 246, 0.3)',
        'card-glow': '0 0 40px rgba(59, 130, 246, 0.1)',
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
        'hero-glow': 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 40%)',
        'button-gradient': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'border-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
}

