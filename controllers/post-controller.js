const router = require('express').Router();
const { User, Post } = require('../models/post.js');
const isAuthenticated = require(`../config/middleware/isAuthenticated`);
const cloudinary = require('cloudinary').v2;
const picLoader = require('../config/middleware/picLoader.js');

const path = require("path");

const home = (req, res) => {
	return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};

module.exports = {
	getHome: home
};







// POST pic
router.post('/', isAuthenticated, picLoader.single('post-photo'), (req, res) => {
	Post.create({
		caption: req.body.caption,
		image: req.file.path,
		user_id: req.session.user_id
	})
		.then((dbPostData) => {
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});
