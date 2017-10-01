simpleApp.controller('shellCrtl', function($scope, $state,$ionicFilterBar,authFactory,Analytics) {

  // global Variable
  var vm = this;
  var Items = [
    {name:'Javascript'},
    {name:'Python'},
    {name:'Ruby'},
    {name:'Java'},
    {name:'C#'}
  ];

  // function Initalize
  vm.testfunction = testfunction;
  vm.showFilterBar = showFilterBar;
  vm.BeforeFilter = BeforeFilter;

  // call fnction
  testfunction();
  BeforeFilter();
  Analytics.trackPage('shellView');

  // test function
  function testfunction() {
    console.log("shell Controller");
  };

  function BeforeFilter() {
    authFactory.setFilterValue(Items);
  }


  function showFilterBar() {
    var filterBarInstance = $ionicFilterBar.show({
      cancelText: "<i class='ion-ios-close-outline'></i>",
      items:  Items,
      update: function (filteredItems, filterText) {
        authFactory.setFilterValue(filteredItems);
      }
    });
  }

});
