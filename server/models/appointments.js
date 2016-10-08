var mongoose = require('mongoose');
var validator = require('node-mongoose-validator')
var AppointmentSchema = new mongoose.Schema({
	complaint:{
		type: String,
		minlength: 10
	}, 
	date:{ type:Date, required: true, validate: validator.$isAfter()},
	hour: {type: Number, min:8, max: 16},
	minute: {type: Number},
	name: String,


},{timestamps:true})

mongoose.model('Appointment', AppointmentSchema)