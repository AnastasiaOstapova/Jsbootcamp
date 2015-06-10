var module = angular.module("bookstore", ['ngRoute']);

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

module.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "PostsController",
            templateUrl: "views/book-catalog.html"
        })
        .when('/posts/:id', {
            controller: "PostDetailsController",
            templateUrl: "views/book-details.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});
