module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@marketplace': './src',
          '@shared': '../../shared'
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ]
  ]
}; 