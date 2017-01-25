var appCine = angular.module("appCine",[]);
// defino llas rutas de la aplicación
appCine.config(function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"styles/templates/index.html"
	})
	.when("/infoMovie/:id",{
		title:"",
		templateUrl:"styles/templates/infoMovie.html",
		controller:"infoMovieController"
	})
	.when("/comprar",{	templateUrl:"styles/templates/comprar.html",
		controller:"comprarController"
	})
	.when("/realizada",{
		title:"",
		templateUrl:"styles/templates/realizada.html",
		controller:"realizadaController"
	})
	.otherwise({ redirectTo : "/"})	
});
