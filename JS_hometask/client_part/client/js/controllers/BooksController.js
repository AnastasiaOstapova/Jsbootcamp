/**
 * Created by Anastasiia_Ostapova on 5/19/2015.
 */
var module = angular.module("bookstore", []);

module.controller("BooksController", function($scope) {
    $scope.posts = books;
});