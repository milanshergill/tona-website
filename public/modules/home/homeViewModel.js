(function() {
  'use strict';

  angular.module('home').controller('homeViewModel', function($scope, userFactory) {
    var viewModel = this;

    viewModel.createUser = function() {
      var name = {name : $scope.firstName};
      console.log(name);
      userFactory.createUser(name);
    };
  });
})();
