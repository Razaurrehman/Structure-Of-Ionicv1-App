simpleApp.factory('restAngularWithToken', function(Restangular, $ionicPopup, $window, $state, $injector, $rootScope, $ionicHistory) {


    $rootScope.myGoBack = function() {
        $ionicHistory.goBack();
    };
    $rootScope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft()
    }
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setFullRequestInterceptor(function(element, operation, route, url, headers) {
            // console.log("hello")
            // checkOnline()
            var header = {};

            //header['x-access-token'] = localStorage.getItem('token');
            //header['x-access-username-a'] = JSON.parse(localStorage.getItem('username'));
            return {
                headers: _.extend(headers, header)
            };
        });

    });

});
