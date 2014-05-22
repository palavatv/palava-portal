source 'https://rubygems.org'

def linux_only()
  RUBY_PLATFORM.downcase.include?("linux") && 'rb-inotify'
end

def mac_only()
  RUBY_PLATFORM.downcase.include?("darwin") && 'rb-fsevent'
end

def windows_only()
  (RUBY_PLATFORM.downcase.include?('mswin') || RUBY_PLATFORM.downcase.include?('mingw')) && 'wdm'
end

gem 'middleman', '~> 3.2.0'
gem 'middleman-bower'
gem 'uglifier'
gem 'sass'
gem 'rb-inotify', '~> 0.9.2', :require => linux_only()
gem 'rb-fsevent', :require => mac_only()
gem 'wdm', :platforms => [:mswin, :mingw], :require => windows_only()
gem 'therubyracer'
gem 'oj'
gem 'rack-rewrite'
gem 'whiskey_disk'

group :development do
  gem 'debugger'
end
