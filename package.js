Package.describe({
  summary: "Tinycon, manipulating the favicon"
});

Package.on_use(function(api) {
  api.add_files(
    [
      'tinycon.min.js'
    ]
    , 'client'
  );
});