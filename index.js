const app = require("./server/server");

const port = 4000 || process.env.PORT;
console.log(port);
app.listen(port, () => {
  console.log("Listening");
});
