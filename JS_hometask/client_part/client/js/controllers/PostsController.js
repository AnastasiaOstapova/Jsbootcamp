/**
 * Created by Anastasiia_Ostapova on 5/19/2015.
 */

var module = angular.module("bookstore");

module.controller("PostsController", function($scope, PostService) {
    //$scope.posts.json = PostService.getBooks();



    PostService.getBooks().then(function(payload) {
        $scope.posts = payload.data;

    });

});

