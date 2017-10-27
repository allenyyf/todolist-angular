/// <reference path="./typings/index.d.ts" />

import * as express from "express"
import * as bodyParser from "body-parser"
import * as mysql from "mysql"


let app  = express()
app.use(express.static("./"))
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}));


let conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"todolist",
    port:3306
})
conn.connect((err)=>{
    if(err){
        console.log("connect err")
        return;
    }else{
        console.log("connect success")
    }
})


app.get("/",(req,res)=>{
    // res.send("连接成功")
})

app.listen(8000,()=>{
    console.log( "listen port 8000")
})

app.get("/data",(req,res)=>{
    
})

app.post("/data",(req,res)=>{
    let data = req.body
    let items = data.items
    console.log(items)
    let tabName = data.tabName
    console.log(tabName)
    let id = 0
    console.log(data)
    conn.query(`insert into items values(${id},${items},${tabName})`);
    // insertData(data)
    // res.send("get data")
})

// function insertData(data:any){
//     let id = 0
//     let items = data.items
//     let tabName = data.tabName
//     console.log(data)
//     conn.query(`insert into todolist values(${id},${items},${tabName})`)

// }








