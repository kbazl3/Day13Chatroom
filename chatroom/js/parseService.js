var app = angular.module('chatroom');

app.service('parseService', function($http){
  //Here you'll need to create two methods. One called postData and the other called getData.
  
  //On the lines below create a getData method. This method will retrieve data from the parse backend.
  //The url for the get request should be 'https://api.parse.com/1/classes/chat?order=-createdAt'
  //Be sure to return whatever gets returned from $http so you can call .then in your controller.


 
  this.getData = function() {
    return $http({ //$http is an object
      method: "GET", // most common methods are get, post, put, delete.  We are retrieving/getting
      //info from server so no data to push/post to server, hence the empty paramater
      url: "https://api.parse.com/1/classes/chat?order=-createdAt" //api address to parse chat
    })
    .then(function(response) { //once the data is grabbed from the server, we run another function
      // to return that data.  the response represents an array of objects.  each object has
      //properties
      return response.data.results

    })


  }


  //On the line below create the postData method. This method will add data to the parse backend.
  //The url for the request needs to be 'https://api.parse.com/1/classes/chat'
  //Because we're making a POST request, we need a way to tell parse the data we want to give it, 
    //in your $http call (along with url and method) have a data property which has a value that is equal to 
    //another object which a key of text and a value of the message being passed to parse. 
    //IE data: {text: yourMessage} 
  //Also, remember that $http returns a promise. So if you return the whole $http call 
  //(return $http(...)), you can then use .then in your controller.
  
  //postData method here
  this.postData = function(yourMessage) { //this function's purpose is to post the messaged the 
  //user typed to the server.  yourMessage is the parameter representing the message
    return $http({ //$http request
      method: "POST", // method of request is POST, adding data to the server
      url: "https://api.parse.com/1/classes/chat", //url/address
      data: {text: yourMessage}
    });
  }
  
  //getData method here
});
