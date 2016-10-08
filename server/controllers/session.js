var mongoose = require('mongoose')
User = mongoose.model('User')
module.exports = (function(){
	return{
		login: function(req, res){
			User.findOne({name: req.body.name}, function(err, data){
				if(err){
					res.json({status: false, error: err})
				}else{
					if(!data){
						var user = new User({name: req.body.name})
						user.save(function(err,data){
							if(err){
								res.json({status: false, error:err})
							}else{
								req.session.name = data.name;
								req.session._id = data._id;
								req.session.save();
								res.json({status: true, error: false, user: data});
							}
						})
					}else{
						req.session.name = data.name;
						req.session._id = data._id;
						req.session.save();
						res.json({status: true, error: false, user: data});
					}
				}
			})
		},
		logout: function(req,res){
			req.session.destroy()
			res.redirect('/')
		},
		getSession: function(req,res){
			if(req.session.name){
				res.json({status: true, name: req.session.name, _id: req.session._id})
			}else{
				res.json({status: false})
			}
		}
	}
})();