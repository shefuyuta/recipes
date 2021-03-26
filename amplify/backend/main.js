const express = require("express");
const mysql = require("mysql");
const app = express();

app.get("/",(res, req) => {
  res.render("/home.ejs");
});
app.get("/indexeng",(res, req) => {
  res.render("/homeeng.ejs");
});

app.get("/recipesjpn",(res, req) => {
  res.render("/recipesjpn.ejs");
});
app.get("/recipeseng",(res, req) => {
  res.render("/recipeseng.ejs");
});

app.get("/aboutjpn",(res, req) => {
  res.render("/aboutjpn.ejs");
});
app.get("/abouteng",(res, req) => {
  res.render("/abouteng.ejs");
});

app.get("/contactjpn",(res, req) => {
  res.render("/contactjpn.ejs");
});
app.get("/contacteng",(res, req) => {
  res.render("/contacteng.ejs");
});

app.get("/",(res, req) => {
  res.render("/.ejs");
});

app.get("/",(res, req) => {
  res.render("/.ejs");
});

app.get("/",(res, req) => {
  res.render("/.ejs");
});
