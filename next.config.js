const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  codeHighlight: true,
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra()
