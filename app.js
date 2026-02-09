let data = require("./xyz");
require("./data.json");
const fs = require("fs");

var name = "Parameshwaran";
a = 5;
// var b = 10; =

// console.log(name, a);
// console.log(data);

setTimeout(() => {
  console.log("Timer");
}, 3);

fs.readFile("./smallfile.txt", "utf-8", () => {
  console.log("file");
});
