Package.describe({
  name: '3stack:uri',
  version: "1.11.2",
  summary: "https://github.com/medialize/URI.js",
  git: 'https://github.com/3stack-software/meteor-uri',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.export('URI');
  api.addFiles('URI.js');
});
