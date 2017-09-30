(function() {

    'use strict';

  simpleApp.config(configuration);

    /* @ngInject */
    function configuration(RestangularProvider) {
        var url = 'https://Bookd.azurewebsites.net';
        //var url =  "http://localhost:3000/";
        var baseUrl = url + '/api/service';
        RestangularProvider.setBaseUrl(baseUrl);
    }

}());
