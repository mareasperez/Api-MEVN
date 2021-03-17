const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
mongoose
  .connect("mongodb://localhost/mevn-database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db is connected"))
  .catch((err) => console.error(err));
//settings
app.set("port", process.env.PORT || 3000);
//middleware
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/task", require("./routes/task.route"));
app;
// static files
app.use(express.static(__dirname + "\\public"));
// console.log(__dirname+'\\public')
// server listening
app.listen(app.get("port"), () => {
  console.log("Server on port, ", app.get("port"));
});
