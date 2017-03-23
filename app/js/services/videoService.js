angular.module('app')



    .service('videoService', function($http) {
        return {
            getOne: function(query) {
                var reqvideo = {
                    method: 'GET',
                    url: "https://api.cognitive.microsoft.com/bing/v5.0/videos/search?q=" + query + "&count=10&offset=0&mkt=en-us&safeSearch=Moderate",
                    headers: {
                        'Ocp-Apim-Subscription-Key': 'cf968acca48c492b88c535945b332bf0'
                    }
                };
                return $http(reqvideo);
            },
        };
    });
