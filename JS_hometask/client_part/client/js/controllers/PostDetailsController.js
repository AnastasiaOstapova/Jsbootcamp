/**
 * Created by Anastasiia_Ostapova on 5/25/2015.
 */

var module = angular.module("bookstore");

module.controller("PostDetailsController", function($routeParams, $scope, $sce, PostService) {

    //$scope.post = PostService.getBook($routeParams.id);
    //$scope.description = $sce.trustAsHtml($scope.post.description);




    PostService.getBook($routeParams.id).then(function(payload) {
        $scope.post = payload.data;

    });

    PostService.getComments($routeParams.id).then(function(payload) {
        console.log($routeParams);
        console.log(payload);

        $scope.comments = payload.data;
    })
});

