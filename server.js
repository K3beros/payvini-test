const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));

require("./app/router/router.js")(app);

// Create a Server
const port = process.env.PORT || 8080;
const server = app.listen(port, function () {
  const port = server.address().port;

  console.log(`App listening on port ${port}`);
});
