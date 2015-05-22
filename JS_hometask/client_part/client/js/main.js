var module = angular.module("bookstore", []);

//module.controller("RowController", function($scope) {
//	$scope.message = "Hi there";
//
//	$scope.greeting = "";
//
//	$scope.$watch("message", function(newValue, oldValue) {
//		console.log("new value is", newValue);
//		$scope.greeting = "Hi" + newValue;
//	});
//});

function cutDescription(text, border) {
    var endOfWord = " .,?!";
    var index = 0;
    var state = false;
    while (state == false) {
        for (var i = 0; i < text.length; i++) {
            if (endOfWord.indexOf(text[i]) != -1 && i < border) {
                console.log("end of the word");
                state = true;
                index = i - 1;
            }
        }
    }
    return text.substring(0, index);
};





