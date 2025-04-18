module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // React Native Reanimated plugin must be listed last
      [
        'react-native-reanimated/plugin',
        {
          // Add configuration options for Reanimated plugin
          relativeSourceLocation: true,
        },
      ],
    ],
  };
};
