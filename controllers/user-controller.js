const express = require('express');
// const app = express.app();
const db = require('../models');
const bcrypt = require("bcrypt");
const path = require('path');
const isAuthenticated = require(`../config/middleware/isAuthenticated`);
const passport = require(`../config/passport`);

module.exports =  
(app,  sequelize) => {
app.post("/signup", (req, res) => {
    console.log(req.body)
    db.User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    })
})

app.post("/login",passport.authenticate(`local`), (req, res) => {
    const user = { user: req.user };
    console.log(user)
    res.render("user")
   
})



app.get('/logout', (req, res) => {
req.session.destroy();
res.redirect('/')
})
//landing page
app.get("/",function(req,res){
	res.render("index");
})
app.get("/signup",function(req,res){
	res.render("signup")
})
app.get("/community",function(req,res){
	res.render("community")
})
app.get("/local",function(req,res){
	res.render("local")
})
app.get("/user",isAuthenticated,function(req,res){
	res.render("user")
})
app.get("/settings",function(req,res){
	res.render("settings")
})
app.get("/postit",function(req,res){
	res.render("postit")
})
}


// module.exports = app;