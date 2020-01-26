// transcription controller
// controls transciption components, maintains transcription scope, will do most of the lifting.
(function () {
    var transApp = angular.module('transcriptionApp', ['transcription-service']);
        transApp.controller('transcriptionController', ['transcriptionService', '$scope', function(transcriptionService, $scope) {
            // get transcription data
            //could results.reduce here to remove results with transcriptions, not sure how your querey works
            $scope.transcriptionData = transcriptionService.getAll();

            //add results to a scope variable
            $scope.results = $scope.transcriptionData.results;

            //initalize transcription form with no data
            $scope.transForm = {};

            // set result index to 0 to show first result 
            $scope.selectedResultIndex = 0;

            $scope.setSelectedItem = function(){
                $scope.selectedItem = $scope.results[$scope.selectedResultIndex];
            }

            //call set selected item function to set a selected item
            $scope.setSelectedItem();

            //increment to next result
            $scope.nextResult = function(){
                $scope.selectedResultIndex === $scope.results.length -1 ? $scope.selectedResultIndex = 0 : $scope.selectedResultIndex++;
                $scope.setSelectedItem();
            };

            //decrement to previous result
            $scope.previousResult = function(){
                $scope.selectedResultIndex === 0 ? $scope.selectedResultIndex = $scope.results.length -1 : $scope.selectedResultIndex-- ;
                $scope.setSelectedItem();
            };

            //submit the transcription, do your validation here,bounce messages back,switch to next item, pop item from results array, whatever you want to do
            $scope.submitTranscription = function(){
                console.log("submitted", $scope.transForm);
                alert("submitted", $scope.transForm);
                $scope.clearTranscriptionForm();
                let itemToRemove = $scope.selectedResultIndex;
                $scope.nextResult();
                $scope.results.splice(itemToRemove,1);
            }


            //clear the object holding the form data
            $scope.clearTranscriptionForm = function(){
                $scope.transForm = {}
                console.log("cleared $scope.transForm", $scope.transForm);
            }
        }]);
}());