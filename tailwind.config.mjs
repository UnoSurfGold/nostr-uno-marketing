/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Semantic tokens map to CSS variables defined in src/styles/global.css
        bg: 'var(--background)',
        fg: 'var(--foreground)',
        card: 'var(--card)',
        muted: 'var(--muted)',
        'muted-fg': 'var(--muted-foreground)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
};
