const path = require("path");
const fs = require("fs");

let fileOne = path.join(__dirname,"files/one.txt");
let fileTwo = path.join(__dirname,"files/two.txt");


let dataOne = fs.readFileSync(fileOne,"utf-8");
let dataTwo = fs.readFileSync(fileTwo,"utf-8");

console.log(dataOne);
console.log(dataTwo);

let fileThree = fs.writeFileSync(path.join(__dirname, "files/one.txt"),`i am a programmer`);
let dataFour = fs.readFileSync(path.join(__dirname,"files/one.txt"), "utf-8");
console.log(dataFour);
