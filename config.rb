set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/images'
set :layout, 'static'

set :palava_domain, 'https://palava.tv'
set :chrome, 'Google Chrome'
set :chrome_description, 'Google Chrome'
set :chrome_link, 'https://google.com/chrome'
set :firefox, 'Mozilla Firefox'
set :firefox_description, 'Mozilla Firefox'
set :firefox_link, 'https://www.mozilla.org/firefox'
set :opera, 'Opera'
set :opera_description, 'Opera'
set :opera_link, 'http://www.opera.com'

# - - -

require 'sprockets/es6'

activate :sprockets do |s|
  s.supported_output_extensions << '.es6'
  s.supported_output_extensions << '.jsx'
end

after_configuration do
  sprockets.append_path "#{root}/node_modules"
end

# - - -

configure :build do
  ignore 'assets/js/**/*'
  ignore 'node_modules'
  activate :minify_css
  # activate :asset_hash
  activate(:minify_javascript,
      ignore: ['assets/js/app', 'node_modules', 'assets/js/lib', 'assets/js/palava'],
      compressor: Uglifier.new(JSON(
        File.read(File.dirname(__FILE__) + '/source/assets/js/palava/uglifier_options.json')
      )),
  )
end

# react html5 routing
require 'rack/rewrite'
use ::Rack::Rewrite do
  rewrite %r{^\/(?!(html|assets|plv|favicon\.ico|robots\.txt|humans\.txt))(.+)$}, '/index.html'
end

