app.factory('appointmentsFactory', function($http, $location){
	var factory = {};
	factory.appointments = '';

	factory.getAppointments = function(callback){
		$http.get('/appointments/get').success(function(data){
			factory.appointments = data.appointments;
			callback(factory.appointments)
		})
	}
	factory.create = function(appointment, callback){
		$http.post('/appointment/add', appointment).success(function(data){
			if(data.status == true){
				$location.url('/dashboard')
			}else{
				alert("Booking failed", data.err)
			}
			
		})
	}
	factory.deleteAppointment = function(id, name){
		var data = {id: id, name: name}
		$http.post('/appointments/delete', data)
	}
	return factory
})