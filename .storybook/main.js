const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  "stories": [
    "../src/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: (config) => {
    const tsconfigPathsPlugin =  new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, "../tsconfig.json")
    })

    if (config.resolve.plugins) {
        config.resolve.plugins.push(tsconfigPathsPlugin);
    } else {
        config.resolve.plugins = [tsconfigPathsPlugin];
    }

    return config
  }
}
