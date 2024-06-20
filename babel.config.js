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
          '@interface': './src/interfaces',
          '@route': './src/route',
          '@screen': './src/screen',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@validation': './src/validation',
        },
      },
    ],

    // ... other configs, if any
  ],
};
