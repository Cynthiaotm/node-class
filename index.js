const path= require("path");
const fs= require("fs")

// fs.mkdir("project",(err)=> { //created a folder//
//     if (err) throw err;
// let pop= path.join(__dirname,"project/index.txt") //created a file inside of the folder//
// fs.writeFile(pop,"js is awesome",(err)=>{ //write text inside of the file just created//
//     if (err) throw err;
//     console.log("task is done");
// })
    
// })


let var0 = path.join(__dirname, "project/index.txt");
fs.mkdir(var0, (err) =>{
    if (err) throw err;
    fs.writeFile(var0+ "js is awesome",(err)=>{
        if (err) throw err;
        console.log("task is carried out successfully");
    })
})


let var1 = path.join(__dirname, "project/css");
fs.mkdir(var1, (err) =>{
    if (err) throw err;
    fs.writeFile(var1 +"/style.css", "js is awesome",(err)=>{
        if (err) throw err;
        console.log("task is carried out successfully");
    })
})

let var2 = path.join(__dirname, "project/js");
fs.mkdir(var2, (err) =>{
    if (err) throw err;
    fs.writeFile(var2+ "/script.js", "js is awesome",(err)=>{
        if (err) throw err;
        console.log("task is carried out successfully");
    })
})