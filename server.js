const path = require('path');
const express = require('express');
const routes = require('./controllers/controller');
// const sequelize = require('./config-backup/connection');
const app = express();
// const exphb = require('express-handlebars');
// const helpers = require('./utils/helpers');
const PORT = process.env.PORT || 3001;
// const hbs = exphb.create({ helpers });
const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models')

// app.use(session(sess));
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use((req, res, next) => {
// 	res.locals.error = req.flash('error');
// 	res.locals.success = req.flash('success');
// 	next();
// });
// app.use(routes);
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