module.exports = {
  extends: ["pagarme-base"],
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
}