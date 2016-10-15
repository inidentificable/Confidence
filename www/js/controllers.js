angular.module('starter.controllers', [])

//Controlador para login de MercadoLibre
.controller('LoginMELI', function($scope) {
  response.redirect(meliObject.getAuthURL(redirect_uri))
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.goPerfil = function(){
        $state.go('perfil', {});
    };


    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    };
})

.controller('PerfilCtrl', function($scope,$stateParams){
    console.log('');
    console.log('here');

});