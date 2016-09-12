(function(){

//par exemple evite l'utilisation d'une variable non déclarée, renvoit erreur log dans la console
'use strict';


  //Création d'un module angular
  angular.module('Module1', [])
          //Definition du controleur qui contient le scope et autres
         .controller('Module1Controller', function($scope){
           $scope.name = "test angular is ok";
           $scope.input = "valeur par défaut";

           //utilisation d'une fonction daans le controller
           $scope.hello = function hello(){
             return "test fonction ok";
           }

         });
  
})();
