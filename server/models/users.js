var mongoose = require('mongoose');
var validator = require('node-mongoose-validator');
var UserSchema = new mongoose.Schema({
	name: String,
	_appointments: [{type:mongoose.Schema.Types.ObjectId, ref: 'Appointments'}],
})
mongoose.model('User', UserSchema)