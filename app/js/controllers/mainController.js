angular.module('app')
    .controller('MainController', function($scope, omdbService, gifService, imageService) {
        /* Here is your main controller */

        $scope.query = "";
        $scope.goSearch = function() {

            // OMDB API
              omdbService.getOne($scope.query).then(function(response) {
                $scope.details = response.data;
              });

            // GIPHY API
               gifService.getOne($scope.query).then(function(res) {
                $scope.gif = res.data.data;
            });

            //image
            imageService.getOne($scope.query).then(function(response) {
                $scope.image = response.data;
                console.log($scope.image.value[0].contentUrl);
            });

        };
    });
