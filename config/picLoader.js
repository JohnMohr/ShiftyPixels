const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = new CloudinaryStorage({
	cloudinary : cloudinary,
	params     : {
		folder         : 'works',
		allowedFormats : [ 'jpg', 'png' ]
	}
});


const imgUpload = multer({ storage: storage });

module.exports = imgUpload;