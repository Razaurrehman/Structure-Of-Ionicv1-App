simpleApp.controller('homeCrtl', function($scope,$ionicFilterBar) {

  // global Variable
  var vm = this;

  // function Initalize
  vm.testfunction = testfunction;
  vm.showFilterBar = showFilterBar;


  // call fnction
  testfunction();
  vm.items = [
    {name:'Javascript'},
    {name:'Python'},
    {name:'Ruby'},
    {name:'Java'},
    {name:'C#'}
  ];


  // test function
  function testfunction() {
    console.log("home Controller");
  }
  function showFilterBar() {
    var filterBarInstance = $ionicFilterBar.show({
      cancelText: "<i class='ion-ios-close-outline'></i>",
      items:  vm.items,
      update: function (filteredItems, filterText) {
        vm.items = filteredItems;
      }
    });
  }
});
