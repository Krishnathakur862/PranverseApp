{/*const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/** 
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}

const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
*/}


const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  resolver: {
    blockList: exclusionList([
      /node_modules\/.\/node_modules\/react-native\/./, 
    ]),
  },
  watchFolders: [
    path.resolve(__dirname, 'node_modules'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);