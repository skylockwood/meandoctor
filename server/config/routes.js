var session = require('./../controllers/session.js')
var appointments = require('./../controllers/appointments.js')
module.exports = function(app){
	app.post('/login', function(req,res){
		session.login(req, res);
	})
	app.get('/logout', function(req,res){
		session.logout(req,res)
	})
	app.get('/getSession', function(req,res){
		session.getSession(req, res)
	})
	app.get('/appointments/get', function(req, res){
		appointments.index(req, res)
	})
	app.post('/appointment/add', function(req,res){
		appointments.add(req, res)
	})
	app.post('/appointments/delete',function(req,res){
		appointments.delete(req,res)
	})
}