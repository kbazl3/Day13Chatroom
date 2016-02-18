var app = angular.module('chatroom');
app.controller('mainCtrl', function($scope, parseService){
  //In your controller you'll have a getParseData function and a postData function, 
  //but should be placed on $scope.

  //The getParseData function will call the getData method on the parseService object. 
  //You'll then save the result of that request to 
  //your controllers $scope as messages ($scope.messages)

    $scope.getParseData = function() {
      parseService.getData() //invokes the getData method in the service. No argument because we are just
      //trying to retrieve/"GET" the data on the server
      .then(function(response) { //the .then method is ran once the service has delivered the data
        // back to the controller. IN this case the data is represented by the response paramater.
        $scope.messages = response; //the data in the response is assigned the $scope where
        //it can be displayed
      })
    }


  //The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postData method on the parseService object which will then post it to the parse backend.


    $scope.postData = function() { //postData is in form brackets so it gets invoked when hitting enter
      var messages = $scope.message; //assign the value of the input to var messages
      parseService.postData(messages); //invoke postData with messages as argument, passing to service
      $scope.message = ""; //clear the input out after posting
    }

  //uncomment this code when your getParseData function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  setInterval(function(){
    $scope.getParseData(); //this code is invoking getParseData every 1.5 seconds
  }, 1500)
})
