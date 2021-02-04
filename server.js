const path = require('path');
const express = require('express');
const routes = require('./controllers/controller');
const app = express();
const PORT = process.env.PORT || 3001;
// const hbs = exphb.create({ helpers });
const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models')

// All requests made with the client will be authenticated
// const client = createClient('563492ad6f91700001000001bb5052fb7c7742528f8fb1620097f617');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const hbs = exphb.create({ helpers });
// const helpers = require('./utils/helpers');
// const exphb = require('express-handlebars');
// const sequelize = require('./config-backup/connection');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(session(sess));
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// app.use(express.static('public'));
// app.use((req, res, next) => {
// 	res.locals.error = req.flash('error');
// 	res.locals.success = req.flash('success');
// 	next();
// });
// app.use(routes);

// import { createClient } from 'pexels';

app.get("/",function(req,res){
	res.sendFile(path.join(__dirname, "index.html"))
})
app.get("/signup",function(req,res){
	res.sendFile(path.join(__dirname, "./public/signup.html"))
})
app.get("/community",function(req,res){
	res.sendFile(path.join(__dirname, "./public/community.html"))
})
app.get("/local",function(req,res){
	res.sendFile(path.join(__dirname, "./public/local.html"))
})
app.get("/user",function(req,res){
	res.sendFile(path.join(__dirname, "./public/user.html"))
})
app.get("/settings",function(req,res){
	res.sendFile(path.join(__dirname, "./public/settings.html"))
})

db.sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});