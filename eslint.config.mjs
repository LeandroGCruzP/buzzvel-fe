import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['perfectionist'],
    rules: {
      'perfectionist/sort-enums': ['error'],
      'perfectionist/sort-interfaces': ['error'],
      'perfectionist/sort-object-types': ['error'],
      'perfectionist/sort-objects': ['error'],
      'prefer-arrow-callback': ['error'],
    },
  }),
]

export default eslintConfig
