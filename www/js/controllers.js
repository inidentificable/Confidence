angular.module('starter.controllers', [])

//Controlador para login de MercadoLibre
.controller('LoginMELICtrl', function($scope, $ionicPopup, $state, LoginMELIService) {
    
    $scope.authUrl = '';

    LoginMELIService.getAuthUrl('http://localhost')
        .then(function(response){
            console.log('response', response.url);
            $scope.authUrl = response.url;

            

            $window.location.href = 'http://localhost:8100/#/profile';

        .catch(function(error){
            console.log('error', error);
        });
})

.controller('getProfile', function($scope) {    
    $state.go('profile', {});
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