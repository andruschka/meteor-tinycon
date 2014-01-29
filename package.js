Package.describe({
  summary: "Tinycon.js, packed for Meteor."
});

Package.on_use(function(api) {
  api.add_files(
    [
      'tinycon.min.js'
    ]
    , 'client'
  );
});