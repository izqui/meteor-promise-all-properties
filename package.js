Package.describe({
  name: "izqui:meteor-promise-all-properties",
  summary: "Export Promise.allProperties",
  version: "1.0.0",
  git: "https://github.com/izqui/meteor-promise-all-properties.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.addFiles('export.js');

  api.export('Promise');
});
