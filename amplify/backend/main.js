const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1681",
  database: "pasta"
});

connection.connect((err)=>{
  if(err) {
    console.log("error connection: " + err.stack);
    return;
  }
  console.log("success");
});
