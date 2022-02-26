const path = require("path");
const { override, getBabelLoader } = require("customize-cra");
// const rewireSvgReactLoader = require("react-app-rewire-svg-react-loader");

function removeBuiltinBabelConfig(config) {
  const loader = getBabelLoader(config);

  loader.options.presets = [];
  loader.options.plugins = [];

  return config;
}

function enableBabelConfig(config) {
  const loader = getBabelLoader(config);
  loader.options.configFile = path.resolve(__dirname, "babel.config.js");

  return config;
}

// function enableSvg(config, env) {
//   config = rewireSvgReactLoader(config, env);
//   return config;
// }

module.exports = override(removeBuiltinBabelConfig, enableBabelConfig);
