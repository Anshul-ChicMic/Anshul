module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin','@babel/plugin-transform-optional-chaining',"inline-import"]
};
// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: [
//     'react-native-reanimated/plugin',
//     '@babel/plugin-transform-optional-chaining',
//     ['babel-plugin-inline-import', {
//       extensions: ['.txt', '.svg'] // Add the extensions you need
//     }]
//   ]
// };
