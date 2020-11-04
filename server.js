/** Start server for Lunchly. */

const app = require("./app");

app.listen(3000, function() {
  console.log("listening on 3000");
});

// start with:
// nodemon -e js,html,css
// to make sure that it is tracking changes in js, html and css (which is not default behavior.)