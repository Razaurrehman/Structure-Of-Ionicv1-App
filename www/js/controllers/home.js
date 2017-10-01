simpleApp.controller('homeCrtl', function($scope,$ionicFilterBar,authFactory) {

  // global Variable
  var vm = this;

  // function Initalize
  vm.testfunction = testfunction;


  // call fnction
  testfunction();
  vm.items = authFactory;


  // test function
  function testfunction() {
    console.log("home Controller");
  }
});
