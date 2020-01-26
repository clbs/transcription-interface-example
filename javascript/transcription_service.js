// transcription controller
// controls transciption service. You'll want to make your API calls here to pull them out of the controller and clean the controller up
// return calls as javascript objects then party with them when they return.
(function () {
    var app = angular.module('transcription-service', []);
    app.service('transcriptionService', ['$http', function($http) {
        var service = this;

        service.getAllTranscriptions = function(){
            /* kind of an example promise but it wont work
            TODO: build headers, config, pass through userToken and apiHost to build url
            for now we're just cheesing data back
            $http.get(apiHost)
            .success(function(data, status, headers, config) {
                let transcriptionData = data;
            })
            .error(function() {});
            */
            let data = {
                "count": 4,
                "next": "4",
                "previous": "0",
                "results": [
                  {
                    "detail": "transcription 1",
                    "image": "./static/transcriptiontest1.png",
                    "text": "this is transcription 1",
                    "user": "your mom",
                    "created_at": "2020-01-25T19:49:33.097Z",
                    "revision_count": "1"
                  },
                  {
                    "detail": "transcription 2",
                    "image": "./static/transcriptiontest2.png",
                    "text": "string",
                    "user": "your dad",
                    "created_at": "2020-01-25T19:49:33.097Z",
                    "revision_count": "2"
                  },
                  {
                    "detail": "transcription 3",
                    "image": "./static/transcriptiontest3.png",
                    "text": "string",
                    "user": "your uncle",
                    "created_at": "2020-01-25T19:49:33.097Z",
                    "revision_count": "3"
                  },
                  {
                    "detail": "transcription 4",
                    "image": "./static/transcriptiontest4.png",
                    "text": "transcription 4",
                    "user": "your grandpa",
                    "created_at": "2020-01-25T19:49:33.097Z",
                    "revision_count": "4"
                  }
                ]
              };

              let returnData = JSON.stringify(data);
              return JSON.parse(returnData);
        }
        
        return {
            getAll: function getAll() {
                return service.getAllTranscriptions();
            }
            /*more services will live down here as this grows.
            ,
            postTranscripton: function loadAction(action) {
                return service.loadEntity(action);
            },
            postTranscripton: function loadAction(action) {
                return service.loadEntity(action);
            }*/
        };
    }]);
}());