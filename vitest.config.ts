import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [{ test: { name: 'checks', include: ['src/**/*.test.ts', 'checks/**/*.test.ts'] } }],
  },
});
