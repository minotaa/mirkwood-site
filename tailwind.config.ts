import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        dungeon: ['Dungeon', 'sans-serif'],
        sink: ['Sink', 'sans-serif'],
      },
    },
  },

  plugins: []
} satisfies Config;
