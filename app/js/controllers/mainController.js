angular.module('app')
    .controller('MainController', function($scope, omdbService, gifService, imageService, videoService, $sce) {
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
            });


            videoService.getOne($scope.query).then(function(response) {
                $scope.video = response.data;
                $scope.bindHTML = $sce.trustAsHtml($scope.video.value[0].embedHtml);
                console.log($scope.video);
            });


        };
    });
