document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<PalavaRouter />, document.getElementById("app"))
})

// <% require 'digest/sha2' %>
// plvAssetVersion = "<%= system('git rev-parse HEAD > /dev/null') ? Digest::SHA512.hexdigest(rand().to_s) : Digest::SHA512.hexdigest(`git rev-parse HEAD`)  %>"
