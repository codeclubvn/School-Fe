module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  useTabs: false,
  quoteProps: 'consistent',
  arrowParens: 'always',
  printWidth: 90,
  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^next', // Next-related imports
    '^next-.*$', // Next-related imports
    '^next/.*$', // Next-related imports
    'react', // React
    '^react-.*$', // React-related imports
    '^@/theme/.*$', // Theme
    '^@/content/.*$', // Contents
    '^@/contexts/.*$', // Contexts
    '^@/hooks/.*$', // Hooks
    '^@/hocs/.*$', // HOCs
    '^@/pages/.*$', // Pages
    '^@/components/.*$', // Components
    '^@/config/.*$', // Configs
    '^@/config/api/.*$', // Api
    '^@/config/helpers/.*$', // Helpers
    '^@/config/constants/.*$', // Constants
    '^@/config/types/.*$', // Types
    '^[./]', // Other imports
    '.*', // Any uncaught imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
