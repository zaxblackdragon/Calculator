//  path is required to as a module load the html to the url declaration
const path = require("path");
// exports the route for the survey.html
module.exports = function(app) { 

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
};