simpleApp.factory('authFactory', function(dataService) {


  // Global varible
  var filterValue;

  return {

    // initalize Funcrion
    testFunction: testFunction,
    setFilterValue : setFilterValue,
    getFilterValue : getFilterValue


  };

  // test function
  function testFunction() {
    console.info('This is a test function');
  }

  function setFilterValue(items) {
    filterValue = items;
  }

  function getFilterValue() {
    return filterValue;
  }

});
