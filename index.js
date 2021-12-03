const path= require("path");
const fs = require("fs");


// fs.mkdir("project",(err)=> { //created a folder//
//     if (err) throw err;
// let pop= path.join(__dirname,"project/index.txt") //created a file inside of the folder//
// fs.writeFile(pop,"js is awesome",(err)=>{ //write text inside of the file just created//
//     if (err) throw err;
//     console.log("task is done");
// })
    
// })


// let var0 = path.join(__dirname, "project/index.txt");
// fs.mkdir(var0, (err) =>{
//     if (err) throw err;
//     fs.writeFile(var0+ "js is awesome",(err)=>{
//         if (err) throw err;
//         console.log("task is carried out successfully");
//     })
// })


// let var1 = path.join(__dirname, "project/css");
// fs.mkdir(var1, (err) =>{
//     if (err) throw err;
//     fs.writeFile(var1 +"/style.css", "js is awesome",(err)=>{
//         if (err) throw err;
//         console.log("task is carried out successfully");
//     })
// })

// let var2 = path.join(__dirname, "project/js");
// fs.mkdir(var2, (err) =>{
//     if (err) throw err;
//     fs.writeFile(var2+ "/script.js", "js is awesome",(err)=>{
//         if (err) throw err;
//         console.log("task is carried out successfully");
//     })
// })


let var1 = path.join(__dirname,"project");
fs.mkdir(var1,(err)=>{
    if (err) throw err;
    console.log("project folder has been created");
})
let var2= path.join(__dirname,"project/client")
fs.mkdir(var2, (err)=>{
    if (err) throw err;
    console.log("client has beeen created inside project");
})
let var3= path.join(__dirname,"project/server")
fs.mkdir(var3,(err)=>{
    if (err) throw err;
    console.log("server has been created");
})
let var4= path.join(__dirname,"project/client/views")
fs.mkdir(var4,(err)=>{
    if (err) throw err;
    console.log("views has beeen created");
})
let var5= path.join(__dirname,"project/client/css");
fs.mkdir(var5,(er)=>{
    if (err) throw err;
    console.log("css has been created");
})
let var6= path.join(__dirname,"project/client/js");
fs.mkdir(var6,(err)=>{
    if (err) throw err;
    console.log("js has been created");
})
let var7 = path.join(__dirname,"project/server/routes")
fs.mkdir(var7,)





// let var1 = path.join(__dirname, "project/css");
// fs.mkdir(var1, (err) =>{
//     if (err) throw err;
//     fs.writeFile(var1 +"/style.css", "js is awesome",(err)=>{
//         if (err) throw err;
//         console.log("task is carried out successfully");
//     })
// })

// let var2 = path.join(__dirname, "project/js");
// fs.mkdir(var2, (err) =>{
//     if (err) throw err;
//     fs.writeFile(var2+ "/script.js", "js is awesome",(err)=>{
//         if (err) throw err;
//         console.log("task is carried out successfully");
//     })
// })