const path = require('path');
const express = require('express');
const passport = require("./config/passport");
const routes = require('./controllers/user-controller');
const app = express();
const PORT = process.env.PORT || 3001;
const expressHandlebars = require(`express-handlebars`);
const session = require('express-session');
const db = require('./models')


// All requests made with the client will be authenticated
// const client = createClient('563492ad6f91700001000001bb5052fb7c7742528f8fb1620097f617');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const hbs = exphb.create({ helpers });
// const helpers = require('./utils/helpers');
// const exphbs = require('express-handlebars');
// const sequelize = require('./config-backup/connection');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.engine(`handlebars`, expressHandlebars({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);




// app.use((req, res, next) => {
// 	res.locals.error = req.flash('error');
// 	res.locals.success = req.flash('success');
// 	next();
// });
app.use(routes);

// import { createClient } from 'pexels';


db.sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});