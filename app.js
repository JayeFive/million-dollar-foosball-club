var express = require("express"),
    app = express();

app.get("/", function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});



app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started...");
});