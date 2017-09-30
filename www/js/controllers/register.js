simpleApp.controller('registerCrtl', function($scope,$cordovaCamera,Upload, $rootScope, $q,cloudinary,$cordovaFileTransfer) {

  // global Variable
  var vm = this;
  vm.registerData = {};

  // function Initalize
  vm.testfunction = testfunction;
  vm.registerUserData = registerUserData;
  vm.imageUpload = imageUpload;
  // vm.uploadFiles = uploadFiles;
  // vm.getPicUrl = getPicUrl;


  // call fnction
  testfunction();

  // test function
  function testfunction() {
    console.log("register Controller");
  }

  function registerUserData() {
    console.log(vm.registerData);
  }

  function imageUpload() {
    document.addEventListener("deviceready", function () {

      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      };

      $cordovaCamera.getPicture(options).then(function(imageURI) {
        var Profile =imageURI;
        var server = 'https://api.cloudinary.com/v1_1/raza03/image/upload';

        //must be included for cloudinary unsigned upload
        var options = {
          'params': {
            'upload_preset': 'nkupdrps'
          }
        };

        $cordovaFileTransfer.upload(server,Profile, options)
          .then(function(result) {

            var response = JSON.parse(result.response);

            //this is your image source https url
            vm.Profile =response.secure_url;

          }, function(err) {
            console.log(JSON.stringify(err));
            // Error print
          }, function (progress) {
            //progress update
          });
      }, function(err) {
        // error
      });

    }, false);

  }


  // // cloudnary Image Upload
  // var cl = cloudinary.Cloudinary.new();
  // cl.config("cloud_name", "doiqskci6");
  // // cl.config( "api_key", "183249429629613");
  // cl.config("upload_preset", "a8rf43or");
  //
  // // Get All upload image
  // function uploadFiles(x) {
  //   vm.files = x;
  //   getPicUrl();
  // };
  //
  // // return image url From Cloudnary Api's
  // function getPicUrl() {
  //   var deferred = $q.defer();
  //   var upload;
  //   if (!vm.files) return;
  //   angular.forEach(vm.files, function(file) {
  //     if (file && !file.$error) {
  //       file.upload = Upload.upload({
  //         url: "https://api.cloudinary.com/v1_1/" + cl.config().cloud_name + "/upload",
  //         data: {
  //           upload_preset: cl.config().upload_preset,
  //           tags: 'myphotoalbum',
  //           context: 'photo=' + vm.title,
  //           file: file
  //         }
  //       }).progress(function(e) {
  //         file.progress = Math.round((e.loaded * 100.0) / e.total);
  //         file.status = "Uploading... " + file.progress + "%";
  //         vm.picStatus = file.status
  //       }).success(function(data, status, headers, config) {
  //         $rootScope.photos = $rootScope.photos || [];
  //         data.context = { custom: { photo: vm.title } };
  //         file.result = data;
  //         $rootScope.photos.push(data);
  //         vm.profile = data.url;
  //         vm.profileInformation.profilePic = vm.profile;
  //         // editProifle();
  //       }).error(function(data, status, headers, config) {
  //         file.result = data;
  //       });
  //     }
  //   });
  //   return deferred.promise;
  // };



});
