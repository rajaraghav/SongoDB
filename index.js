const app = require("./server/server");

const port = 4000 || process.env.PORT;
app.listen(port, () => {
  console.log("Listening");
});
