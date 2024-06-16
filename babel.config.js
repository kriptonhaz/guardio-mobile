module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ... other configs, if any
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@route': './src/route',
          '@screen': './src/screen',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],

    // ... other configs, if any
  ],
};
