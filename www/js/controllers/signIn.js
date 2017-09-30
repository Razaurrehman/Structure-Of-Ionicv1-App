simpleApp.controller('signInCrtl', function($scope, $state) {

    // global Variable
    var vm = this;
    vm.loginData = {};


    // function Initalize
    vm.testfunction = testfunction;
    vm.login = login;



    // call fnction
    testfunction();

    // test function
    function testfunction() {
        console.log("signIn Controller");
    };

    function login() {
        console.log(vm.loginData);
        $state.go('app.home');
    };
});
