import { defineConfig } from '@nailyjs/config'

export default defineConfig({
  naily: {
    eslint: {
      rules: {
        'no-console': 'off',
      },
    },
  },
})
