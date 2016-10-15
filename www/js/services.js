angular.module('starter.services', [])

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.service('LoginMELIService', function($q) {
    return {
        loginUser: function() {
            var deferred = $q.defer();
            var promise = deferred.promise;

            //Conecta appi MercadoLibre para login
            var meliObject = new meli.Meli(1213949921402143, 'VT2tlhth0TLDe99pojRvhtb4szSSVhhq');
            var redirect_uri = 'http://localhost:8100/success';
            var redirect_uri_success = 'http://localhost:8100';
            var callback = function(){
                deferred.resolve('Bienvenido a Confidence!');
            }
            //fin conector MercadoLibre para login 

            $state.go(meliObject.getAuthURL(redirect_uri));

            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
});