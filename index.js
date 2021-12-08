const express = require("express");
const path = require("path");


const app =  express();

//initialized app
app.use(express.static(path.join(__dirname,"public")))


let index1 = path.join(__dirname,"views/index.html");
let index2 = path.join(__dirname,"views/about.html");
let index3 = path.join(__dirname,"views/contact.html");
let index4 = path.join(__dirname,"views/post.html");


app.get("/",(req,res)=>{
    res.sendFile(index1)
});

app.get("/about",(req,res)=>{
    res.sendFile(index2)
});


app.get("/contact",(req,res)=>{
    res.sendFile(index3)
});

app.get("/products",(req,res)=>{
    res.sendFile(index4)
});



const PORT = process.env.PORT || 1200;

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost${PORT}`);
})














































// const { rejects } = require("assert");
// const fs = require("fs");
// const path = require("path");
// const { resolve } = require("path");
// const util = require("util");

// // const promise = new Promise((resolve,reject)=>{
// //     resolve("good");
// //     reject("bad error")
// // })
// // .then((message)=> console.log(message))
// // .catch((err)=> console.log(err));

// // //reading a single file using promise//
// // let readTwo= util.promisify(fs.readFile);

// // readTwo(dataOne, "utf-8")
// // .then((data)=>{console.log(data)});

// // let readThree = util.promisify(fs.writeFile);
// // let readFour = util.promisify(fs.readFile);
// // let dataTwo = path.join(__dirname,"money/ify.txt");

// // readThree(dataTwo, "i am marycynthia")
// // readFour(dataTwo, "utf-8")

// // .then((data)=>{console.log(data)})


// fs.mkdir("silence",(err)=> { 
//     if (err) throw err;
//     console.log("folder has beeen created");
// })

// let folderOne = util.promisify(fs.mkdir);

// folderOne("folders").catch((err){console.log});


