simpleApp.factory('dataService', function authFactory(Restangular, restAngularWithToken) {

    // initalize Funcrion
    return {

        // Function inatialize
        testFunction: testFunction,


    };

    // test function
    function testFunction() {
        console.info('This is a test function');
    }


});
