let configDB = require('./config/db');
let app = require("./config/express");
let http = require('http');

var server = http.createServer(app);
const PORT = process.env.PORT || 3000;
configDB().catch((err) => {
  console.error("DB connection failed:", err);
  process.exit(1);
});


server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);

  
  configDB()
    .then(() => console.log("Backend successfully connected to MongoDB!"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
});