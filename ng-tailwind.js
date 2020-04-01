module.exports = {
  // Tailwind Paths
  configJS: './ng-tailwind.js',
  sourceCSS: './src/tailwind.css',
  outputCSS: './src/styles.scss',
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
