const fs = require("fs");

//Bocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");

//non-blocking, async way
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("I was first ha!");
