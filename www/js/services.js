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

.service('LoginMELIService', ['$q', '$http', function($q, $http){
    var getAuthUrl = function(callbackUrl){
        var deferred = $q.defer();

        $http.get('http://10.77.70.126:3000/users/get_meli_auth_url?callbackUrl=' + callbackUrl)
            .success(function(response){ 
                deferred.resolve(response);
            })
            .error(function(error){
                deferred.refected(error);
            });

        return deferred.promise;
    } 


    var service = {
        getAuthUrl: getAuthUrl
    }

    return service;
}]);