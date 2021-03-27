const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.static("./"));

app.get("/",(res, req) => {
  res.render("/homejpn.ejs");
});
app.get("/homejpn",(res, req) => {
  res.render("/homejpn.ejs");
});
app.get("/index",(res, req) => {
  res.render("/homejpn.ejs");
});
app.get("/homeeng",(res, req) => {
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

app.get("/recipeavocadocreamjpn",(res, req) => {
  res.render("/recipeavocadocreamjpn.ejs");
});

app.get("/recipebolognesejpn",(res, req) => {
  res.render("/recipebolognesejpn.ejs");
});

app.get("/recipebottargajpn",(res, req) => {
  res.render("/recipebottargajpn.ejs");
});
app.get("/recipecarbonarajpn",(res, req) => {
  res.render("/recipecarbonarajpn.ejs");
});

app.get("/recipecurrycreampastajpn",(res, req) => {
  res.render("/recipecurrycreampastajpn.ejs");
});

app.get("/recipedashipastajpn",(res, req) => {
  res.render("/recipedashipastajpn.ejs");
});

app.get("/recipehomemadepastajpn",(res, req) => {
  res.render("/recipehomemadepastajpn.ejs");
});

app.get("/recipelasagnajpn",(res, req) => {
  res.render("/recipelasagnajpn.ejs");
});

app.get("/recipemeatballpastajpn",(res, req) => {
  res.render("/recipemeatballpastajpn.ejs");
});

app.get("/recipemincedporkpastajpn",(res, req) => {
  res.render("/recipemincedporkpastajpn.ejs");
});

app.get("/recipemushroomcreampastajpn",(res, req) => {
  res.render("/recipemushroomcreampastajpn.ejs");
});

app.get("/recipepescatorejpn",(res, req) => {
  res.render("/recipepescatorejpn.ejs");
});

app.get("/recipeporcinicreampastajpn",(res, req) => {
  res.render("/recipeporcinicreampastajpn.ejs");
});

app.get("/recipeputtanescarossojpn",(res, req) => {
  res.render("/recipeputtanescarossojpn.ejs");
});

app.get("/recipesalmonpastajpn",(res, req) => {
  res.render("/recipesalmonpastajpn.ejs");
});

app.get("/recipetomatocreampastajpn",(res, req) => {
  res.render("/recipetomatocreampastajpn.ejs");
});

app.get("/recipethaistylepastajpn",(res, req) => {
  res.render("/recipethaistylepastajpn.ejs");
});

app.get("/recipetomatofusillijpn",(res, req) => {
  res.render("/recipetomatofusillijpn.ejs");
});

app.get("/recipewafuputtanescajpn",(res, req) => {
  res.render("/recipewafuputtanescajpn.ejs");
});

app.get("/recipeoysterbowljpn",(res, req) => {
  res.render("/recipeoysterbowljpn.ejs");
});

app.get("/recipethaifriedricejpn",(res, req) => {
  res.render("/recipethaifriedricejpn.ejs");
});

app.get("/recipebreadjpn",(res, req) => {
  res.render("/recipebreadjpn.ejs");
});

app.get("/recipemainjpn",(res, req) => {
  res.render("/recipemainjpn.ejs");
});

app.get("/recipepastajpn",(res, req) => {
  res.render("/recipepastajpn.ejs");
});

app.get("/recipericejpn",(res, req) => {
  res.render("/recipericejpn.ejs");
});

app.get("/recipestewedporkjpn",(res, req) => {
  res.render("/recipestewedporkjpn.ejs");
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

app.get("/",(res, req) => {
  res.render("/.ejs");
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

app.get("/",(res, req) => {
  res.render("/.ejs");
});
