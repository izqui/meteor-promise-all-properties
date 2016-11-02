Package.describe({
  name: "izqui:meteor-promise-all-properties",
  summary: "Export Promise.allProperties",
  version: "1.0.4",
  git: "https://github.com/izqui/meteor-promise-all-properties.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');
  api.use('promise');
  api.addFiles('index.js');
  api.export('Promise');
});
