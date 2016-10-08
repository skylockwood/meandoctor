app.controller('appointmentsController', function($scope, $location, appointmentsFactory){
	$scope.appt = [];

	appointmentsFactory.getAppointments(function(data){
		$scope.appt = data;

	})
	$scope.create = function(user){
		var t = $scope.new_appt.time
		var t1 = t.getHours();
		var t2 = t.getMinutes();
		console.log('t1:',t1,"t2:",t2)
		$scope.new_appt.hour = t1;
		$scope.new_appt.minute = t2;
		$scope.new_appt.name = user;
		console.log($scope.new_appt)
		appointmentsFactory.create($scope.new_appt, function(data){
			$scope.appt.push(data.data)
		})
		$scope.new_appt = {};
	}
	$scope.deleteAppt = function(id, name){
		appointmentsFactory.deleteAppointment(id, name)
		appointmentsFactory.getAppointments(function(data){
			$scope.appt = [];
			$scope.appt = data
		})
	}

})