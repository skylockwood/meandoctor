app.controller('sessionController', function($scope, $location, sessionFactory){
	$scope.currentUser = {status: false}

	sessionFactory.getSession(function(data){
		$scope.currentUser = data
		if(!$scope.currentUser.status){
			$location.url('/')
		}
	})

	$scope.login = function(){
		sessionFactory.login($scope.log);
	}
})