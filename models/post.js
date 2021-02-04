
module.exports = function (sequelize, DataTypes) {
	var Post = sequelize.define('post', {
		img_url: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isUrl: true
			}
		},
		// file name of image in Cloudinary, needed for deleting
		public_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'user',
				key: 'id'
			}
		}
	},
		{
			sequelize,
			freezeTableName: true,
			underscored: true,
			modelName: 'post'
		}

	)
	return Post;
};

// module.exports = function (sequelize, DataTypes) {
// 	var Post = sequelize.define('post', {
// 		img_url: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 			validate: {
// 				isUrl: true
// 			}
// 		}
// 	});

// 	Review.associate = function (models) {
// 		// add associations here
// 		post.belongsTo(models.user);
		
// 	};

// 	return Post;
// };