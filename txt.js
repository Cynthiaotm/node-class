const path = require("path");
const fs = require("fs");

let dataOne = path.join(__dirname,"test/home.txt");

let fileOne = fs.readFileSync(dataOne,"utf-8");
console.log(fileOne);

let fileTwo = fs.writeFileSync(path.join(__dirname, "test/cynthia.txt"),`i am average in height`);
let dataTwo = fs.readFileSync(path.join(__dirname,"test/cynthia.txt"), "utf-8");
console.log(dataTwo);