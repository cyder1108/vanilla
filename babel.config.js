module.exports = function(api) {
  api.cache(true);
  const presets = [
    [ "@babel/preset-env", {
      targets: { ie: 11 },
      corejs: 3,
      useBuiltIns: "entry"
    }]
  ];
  const plugins = [
    "@babel/plugin-transform-modules-amd",
  ];
  return { presets,plugins };
};
