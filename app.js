/// <reference path="./typings/index.d.ts" />
"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
app.use(express.static("./"));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist",
    port: 3306
});
conn.connect(function (err) {
    if (err) {
        console.log("connect err");
        return;
    }
    else {
        console.log("connect success");
    }
});
app.get("/", function (req, res) {
    // res.send("连接成功")
});
app.listen(8000, function () {
    console.log("listen port 8000");
});
app.get("/data", function (req, res) {
});
app.post("/data", function (req, res) {
    var data = req.body;
    var items = data.items;
    console.log(items);
    var tabName = data.tabName;
    console.log(tabName);
    var id = 0;
    console.log(data);
    conn.query("insert into items values(" + id + "," + items + "," + tabName + ")");
    // insertData(data)
    // res.send("get data")
});
// function insertData(data:any){
//     let id = 0
//     let items = data.items
//     let tabName = data.tabName
//     console.log(data)
//     conn.query(`insert into todolist values(${id},${items},${tabName})`)
// }
