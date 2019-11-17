// TODO
//step 1
const express = require("express");
const bodyParser = require("body-parser");
const controllers = require("./controllers.js");
// step 2
const app = express();
const port = 3003;

// middle ware
// what exactly app.use do!?!? a middle where that take care of chore jobs
app.use(bodyParser.json());

app.use(express.static(__dirname + "/../client/dist/"));

app.get("/restaurants", controllers.getAll);
app.get("/restaurants/:id", controllers.getOne);
app.post("/restaurants", controllers.postRestaurant);

app.delete("/restaurants/:id", controllers.deleteRestaurant);

app.listen(port, () => {
  console.log(`You're listening to ${port}, smooth jazz`);
});
