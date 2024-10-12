// USE EXPRESS, REQUIRED INSTALL
let express = require('express');
let app = express();
// USE dotenv, REQUIERED INSTALL
require("dotenv").config()

// USE bodyparser, REQUIERED INSTALL
let bodyParser = require("body-parser")

const index = __dirname + "/views/index.html"
const publicFolder = __dirname + "/public"

// SEND TEXT
/* app.get("/",
    function(req,res) {
        res.send("Hello Express")
    }
) */

// SEND FILE
/* app.get("/", 
    function(req,res){
        res.sendFile(index)
}) */

// REDIRECT DIR
/* app.use("/public", express.static(publicFolder)) */

// BASIC REST API GET
/* app.get("/json",
    function(req,res){
        res.json({"message": "Hello json"})
}) */

// ACCESS .env FILE, REQUIERES dotenv
/* app.get("/json",
    function(req,res){
        let objectResponse = {"message": "Hello json"}
        if (process.env.MESSAGE_STYLE == "uppercase") {objectResponse.message = objectResponse.message.toUpperCase()}
        res.json(objectResponse)
}) */

// USING MIDDLEWARE
/* app.use("/json", 
    function(req,res,next){
        const method = req.method
        const path = "/json"
        const ip = req.ip
        console.log(`${method} ${path} - ${ip}`)
        next()
})

app.get("/now", 
    function(req, res, next){
        req.time = new Date().toString()
        next()
    },function(req,res){
        res.json({time:req.time})
    }
) */

// USING PARAMS, MIND THE :word 
/* app.get("/:word/echo",
    function(req, res){
        const params = req.params
        res.json({"echo": params.word})
    }
) */

// USING QUERYS, req.query.[param]
/* app.get("/name",
    function(req, res){
        const nameObj = {name: `${req.query.first} ${req.query.last}`}
        res.json(nameObj)
    }
)
 */

// USING body, REQUIERES body-parser, ITS A MIDDLEWARE.
/* app.use("/json", 
    bodyParser.urlencoded({extended:false}),
    function(req,res,next){
        const method = req.method
        const path = "/json"
        const ip = req.ip
        console.log(`${method} ${path} - ${ip}`)
        next()
}) */

/* app.post("/name",
    bodyParser.urlencoded({extended:false}),
    function(req, res){
        const nameObj = {name:`${req.body.first} ${req.body.last}`}
        res.json(nameObj)
    }
) */


















 module.exports = app;
