Package.describe({
  summary: "Tinycon, manipulating the favicon",
  version: "0.0.1",
  git: "https://github.com/andruschka/meteor-tinycon.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files(
    [
      'tinycon.min.js'
    ]
    , 'client'
  );
});