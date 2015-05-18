//var element = document.getElementById("div1");
//element.innerHTML = "hello";
//
//if (element) {
//	console.log("everything is ok");
//}

var module = angular.module("sandbox", []);

module.controller("RowController", function($scope) {
	$scope.message = "Hi there";
});