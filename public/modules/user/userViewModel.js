(function() {
  'use strict';

  angular.module('user').controller('userViewModel', function($scope, userFactory, $http, $sce) {

    var viewModel = this;

    viewModel.showUsers = function() {
      // $scope.users = 'Clicked';
      console.log('Getting Users');
      $http.get('/users').then(function(response) {
        $scope.users = response.data;
      });

      // console.log(userFactory.getAllUsers());
      // $scope.users = userFactory.getAllUsers();
      // console.log($scope.users);
    };

  viewModel.myInterval = 5000;
  viewModel.noWrapSlides = false;
  viewModel.active = 0;
  var slides = viewModel.slides = [];
  var currIndex = 0;

  viewModel.addSlide = function() {
    slides.push({
      image: $sce.trustAsResourceUrl('../../assets/imgs/pps.jpg'),
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  viewModel.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    viewModel.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }

  });
})();
