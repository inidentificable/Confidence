angular.module('starter.controllers', [])

//Controlador para login de MercadoLibre
.controller('LoginMELICtrl', function($scope, $ionicPopup, $state, LoginMELIService) {
    
    /*console.log('MELI TEST');
    console.log('here meli');

    var meliObject = new meli.Meli(1213949921402143, 'VT2tlhth0TLDe99pojRvhtb4szSSVhhq');
    //Conecta appi MercadoLibre para login
    var redirect_uri = 'http://localhost:8100/success';
    var redirect_uri_success = 'http://localhost:8100';
    var callback = function(){
        deferred.resolve('Bienvenido a Confidence!');
    }
    //fin conector MercadoLibre para login 

    $state.go(meliObject.getAuthURL(redirect_uri));*/


    $scope.authUrl = '';

    LoginMELIService.getAuthUrl('http://localhost:8100/#/success')
        .then(function(response){
            console.log('response', response.url);
            $scope.authUrl = response.url;
        })

        .catch(function(error){
            console.log('error', error);
        });


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