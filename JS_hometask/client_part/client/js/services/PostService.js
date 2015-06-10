/**
 * Created by Anastasiia_Ostapova on 5/25/2015.
 */
var module = angular.module("bookstore");

module.service("PostService", function($http) {

    this.getBooks = function() {

        return $http({
            url: 'http://localhost:3003/api/posts?begin=0&length=10',
            method: 'GET'
        });
    };

    this.getBook = function(id) {
        //for (var i = 0; i < books.length; i++) {
        //    if (books[i].id == id) {
        //        return books[i];
        //    }
        //}
        //return null;

        return $http({
            url: 'http://localhost:3003/api/posts/' + id,
            method: 'GET'
        });
    };

    this.getComments = function(pid) {
        return $http({
            url: 'http://localhost:3003/api/posts/' + pid + '/comments',
            method: "GET"
        })
    }

    this.getComment = function(pid, cid) {
        return $http({
            url: 'http://localhost:3003/api/posts/' + pid + '/comments/' + cid,
            method: "GET"
        });
    };

    this.addComment = function(cid) {
        return $http({
            
        })
    }
});