

module.exports = function (sequelize, DataTypes) {
	var Post = sequelize.define('post', {
		username        : {
			type          : DataTypes.INTEGER,
			allowNull     : false,
			primaryKey    : true,
			autoIncrement : true
		},
		caption       : {
			type      : DataTypes.STRING,
			allowNull : false
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isUrl: true
			}
		}
	});

	Post.image = function (models) {
		// add associations here
		post.belongsTo(models.user);
		
	};

	return Post;
};
