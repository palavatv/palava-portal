echo "## SET RUBY ##"
source /etc/profile.d/chruby.sh
echo "## BUNDLE ##"
bundle install --deployment --without test:development
echo "## GIT SUBMODULE ##"
git submodule init
git submodule update
echo "## BUILD ##"
PALAVA_RTC_ADDRESS="wss://playground.palava.tv/machine" bundle exec middleman build
