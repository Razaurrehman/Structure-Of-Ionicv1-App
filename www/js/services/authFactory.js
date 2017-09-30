simpleApp.factory('authFactory', function(dataService) {


    // Global varible


    return {

        // initalize Funcrion
        testFunction: testFunction,


    };

    // test function
    function testFunction() {
        console.info('This is a test function');
    }

});
