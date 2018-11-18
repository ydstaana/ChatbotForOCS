var mongoose = require('mongoose')

var FileSchema = new mongoose.Schema({
	fileName : String,
	author: {
		type : mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	uploadDate : Date,
});


var File = mongoose.model('File', FileSchema);

module.exports =File;