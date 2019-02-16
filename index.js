const app = require("./server/server");

const port = process.env.PORT || 4000;
console.log(port);
app.listen(port, () => {
  console.log("Listening");
});
