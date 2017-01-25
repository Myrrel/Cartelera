appCine.controller("appCineController", function appCineController($scope){

	$scope.datos = [
		{	
			titulo : "Arma Mortal",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov1.gif"
		},
		{	
			titulo : "Duro de Matar",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov2.gif"
		},
		{	
			titulo : "Arma Mortal",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov3.gif"
		},{	
			titulo : "Arma Mortal",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov4.gif"
		},
		{	
			titulo : "Arma Mortal",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov5.gif"
		},
		{	
			titulo : "Arma Mortal",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov6.gif"
		},
		{	
			titulo : "Arma Mortal",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov7.gif"
		},
		{	
			titulo : "Arma Mortal",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov8.gif"
		},
		{	
			titulo : "Arma Mortal",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov9.gif"
		},
		{	
			titulo : "Arma Mortal",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov10.gif"
		},
		{	
			titulo : "Arma Mortal",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov11.gif"
		},
		{	
			titulo : "Arma Mortal",
			genero : "Acción",
			sinop : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nam magnam voluptatibus ducimus nostrum hic iusto voluptate, harum, assumenda aut consectetur praesentium qui, est neque. Eius labore eveniet corporis, consequatur?",
			horario : "",
			imagen: "styles/templates/imgdata/mov12.gif"
		}
		
	];
	
});


/*  *********************
				INFO 
********************   */
appCine.controller("infoMovieController", function infoMovieController($scope,$routeParams){
	$scope.movie = $scope.datos[$routeParams.id];
});                 

/*  *********************
				COMPRAR 
********************   */
appCine.controller("comprarController", function comprarController($scope,$routeParams){
	$scope.movie = $scope.datos[$routeParams.id];
});  

/************************************************************/