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

activate :bower

# - - -

configure :build do
  ignore 'assets/js/**/*'
  activate :asset_hash
  activate :minify_css
  activate(:minify_javascript,
      ignore: ['assets/js/app', 'assets/js/bower', 'assets/js/lib', 'assets/js/palava'],
      compressor: Uglifier.new(JSON(
        File.read(File.dirname(__FILE__) + '/source/assets/js/palava/uglifier_options.json')
      )),
  )
  # set :http_path, "/Content/images/"
end

# angular html5 routing
require 'rack/rewrite'
use Rack::Rewrite do
  rewrite %r{^\/(?!(html|assets|plv|favicon\.ico|robots\.txt|humans\.txt))(.+)$}, '/index.html'
end


###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Compass
###

# Susy grids in Compass
# First: gem install susy
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end
