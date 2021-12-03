const { rejects } = require("assert");
const fs = require("fs");
const path = require("path");
const { resolve } = require("path");
const util = require("util");





let folderOne = util.promisify(fs.mkdir)
let readOne = util.promisify(fs.writeFile);
let readTwo = util.promisify(fs.readFile);
let dataTwo = path.join(__dirname,"sarah/victor.txt");


folderOne("sarah");
readOne(dataTwo, "i love programming");
readTwo(dataTwo,"utf-8")




.then((cars)=>{console.log(cars)})
.catch((lag)=>{console.log(lag)})
