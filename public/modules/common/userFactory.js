(function() {
  'use strict';

  angular.module('common').factory('userFactory', ['$http', function($http) {

    return {
        // call to get all users
        getAllUsers : function() {
          console.log('Getting Users');
          $http.get('/users').then(function(response) {
            console.log(response.data);
            return response.data;
          });
        },

        // call to POST and create a new user
        createUser : function(userData) {
          console.log('Creating User');
          return $http.post('/users', userData);
        },

        // call to DELETE a user
        deleteUser : function(id) {
          console.log('Deleting User');
          return $http.delete('/users/' + id);
        },

        //call to Update user info
        updateUser : function(id, updatedData) {
          console.log('Updating User');
          return $http.put('/users/' + id, updatedData);
        }
    }

  }]);
})();
