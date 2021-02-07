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
    // db.User.findOne({
    //     where: {
    //         email: req.body.email
    //     }
    // }).then(userData => {
    //     if (!userData) {
    //         req.session.destroy();
    //         res.status(404).send("no such user")
    //     } else {
    //         if (bcrypt.compareSync(req.body.password, userData.password)) {
    //             req.session.user = {
    //                 id: userData.id,
    //                 username: userData.username
    //             }
    //             res.json(userData);
    //         } else {
    //             req.session.destroy();
    //             res.status(401).send("wrong password bro")
    //         }
    //     }
    // })
})

app.get("/readsessions", (req, res) => {
    res.json(req.session)
})

app.get("/secretclub", (req, res) => {
    if (req.session.user) {
        res.send(`welcome to the club, ${req.session.user.username}!`)
    } else {
        res.status(401).send("login first you knucklehead")
    }
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
}


// module.exports = app;