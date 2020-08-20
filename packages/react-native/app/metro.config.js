/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

// react-native >= 0.57

const extraNodeModules = {
  ds: path.join(process.cwd(), '/node_modules/@radius/react-native-ds/'),
};

const watchFolders = [
  path.join(process.cwd(), '/node_modules/@radius/react-native-ds/'),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules,
  },
  watchFolders,
};
