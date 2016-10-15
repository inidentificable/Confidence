angular.module('starter.controllers', [])

//Controlador para login de MercadoLibre
.controller('loginMELI', function($scope) {
  response.redirect(meliObject.getAuthURL(redirect_uri))
})


    $scope.goPerfil = function(){
        $state.go('perfil', {id:1});
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
}

.controller('PerfilCtrl', function($scope,$stateParams){
    console.log($stateParams);
    console.log('here');

})

;
