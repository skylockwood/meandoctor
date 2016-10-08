var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'partials/login.html'
	})
	.when('/dashboard',{
		templateUrl: 'partials/dashboard.html'
	})
	.when('/new_appointment',{
		templateUrl: 'partials/new_appointment.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})