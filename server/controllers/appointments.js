var mongoose = require('mongoose')
var Appointment = mongoose.model('Appointment')
var User = mongoose.model('User')
module.exports = (function(){
	return{
		index: function(req, res){
			Appointment.find({}, function(err, appointments){
				if(err){
					console.log(err);
				}else{
					res.json({appointments:appointments})
				}
			})
		},
		add: function(req, res){
			Appointment.find({date:req.body.date}, function(err, appointments){
				if(err){
					console.log(err)
				}else{
					console.log(appointments, "appointments")
					if(appointments.length>2){
						res.json({status:false, err: "too many appts for that day"})
					}else{
						var appointment = new Appointment({date:req.body.date, hour:req.body.hour, minute:req.body.minute, complaint: req.body.complaint, name: req.session.name})
						appointment.save(function(err, data){
							if(err){
								res.json({status:false, err:err})
								console.log(err)
							}else{
							res.json({status:true, data: data})
							}
						})
					}
				}
			})
		},
		delete: function(req,res){
			if(req.session.name == req.body.name){
				Appointment.remove({_id:req.body.id}, function(err){
					if(err){
						console.log(err)
					}
				})
			}
			res.json({status: 'good'})
		}
	}
})()