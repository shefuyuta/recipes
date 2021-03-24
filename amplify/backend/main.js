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

document.querySelector();
//当てはまる最初の要素が対象となる
document.querySelectorAll().forEach(()=>{
  //当てはまる全ての要素一つずつ取り出す
});

document.getElementById();
document.querySellector().addEventListener("click", ()=>{
  document.getElementById().textContent ="Changed!";
});
