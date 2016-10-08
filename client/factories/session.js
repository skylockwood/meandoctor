app.factory('sessionFactory', function($http, $location){
	var factory = {};

	factory.login = function(user){
		$http.post('/login', user).success(function(output){
			if(output.status == true){
				$location.url('/dashboard')
			}else{
				alert("something went wrong")
			}
		})
	}
	factory.getSession = function(callback){
		$http.get('/getSession').success(function(output){
			callback(output)
		})
	}

	return factory;
})