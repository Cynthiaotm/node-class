const fs = require("fs");
const http = require("http");
const path = require("path");
//const server = require ("server");
//console.log(http.STATUS_CODES); it is the different codes used on the server//
let data= [
    {
        name: "emma",
    },
    {
        name: "peter",
    },
    {
        name: "vicent",
    },
    {
        name: "dapo",
    },
]




server = http.createServer((req,res)=>{
    switch (req.url) {
        case "/":
            let baba= path.join("views/index.html")
            let mama = fs.readFileSync(baba,"utf-8")
            res.writeHead(201,{"content-type": "text/html"});
            res.write(mama);
            res.end();
            break;
        
            case "/about-us":
                let baby=path.join("views/about.html")
                let child= fs.readFileSync(baby,"utf-8")
                res.writeHead(201,{"content-type": "text/html"});
                res.write(child);
                res.end();
                break;
        
            case "/contact":
                let things=path.join("views/contact.html")
                let wait= fs.readFileSync(things,"utf-8")
                res.writeHead(201,{"content-type": "text/html"});
                res.write(wait);
                res.end();
                break;

            
                case "/api/names":
                    res.writeHead(201,{"content-type": "application/json"});
                    res.write(JSON.stringify(data));
                    res.end();
                    break;



            default:
                res.writeHead(404,{"content-type": "text/html"});
                res.write(`<h1 style= "text: center; padding-top: 20%">THE ROUTE YOU REQUESTED ${req.url}was not found</h1>`);
                res.end();
                
                break;
    }
});


const PORT = 5000;
server.listen(PORT,console.log(`App is running on localhost port ${PORT}`));
