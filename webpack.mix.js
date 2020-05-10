const mix = require('laravel-mix')

mix
  .js('src/js/app.js', 'dist')
  .postCss('src/css/app.css', 'dist', [
    require('tailwindcss'),
  ])
  .setPublicPath('dist')