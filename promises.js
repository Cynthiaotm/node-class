const { rejects } = require("assert");
const fs = require("fs");
const path = require("path");
const { resolve } = require("path");
const util = require("util");

// const promise = new Promise((resolve,reject)=>{
//     resolve("good");
//     reject("bad error")
// })
// .then((message)=> console.log(message))
// .catch((err)=> console.log(err));

// //readind a single file using promise//
// let readTwo= util.promisify(fs.readFile);

// readTwo(dataOne, "utf-8")
// .then((data)=>{console.log(data)});

// let readThree = util.promisify(fs.writeFile);
// let readFour = util.promisify(fs.readFile);
// let dataTwo = path.join(__dirname,"money/ify.txt");

// readThree(dataTwo, "i am marycynthia")
// readFour(dataTwo, "utf-8")

// .then((data)=>{console.log(data)})


fs.mkdir("silence",(err)=> { 
    if (err) throw err;
    console.log("folder has beeen created");
})

let folderOne = util.promisify(fs.mkdir);

folderOne("folders").catch((err){console.log});


