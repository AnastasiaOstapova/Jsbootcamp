/**
 * Created by Anastasiia_Ostapova on 5/25/2015.
 */

var module = angular.module("bookstore");

module.filter("trimHtml", function() {
    return function(html) {
        return html ? html.replace(/<(?:.|\n)*?>/gm, '') : '';
    }
});

module.filter("cutDescription", function() {
    return function(text, border) {
        var endOfWord = " .,?!";
        var index = 0;
        var state = false;
        while (state == false) {
            for (var i = 0; i < text.length; i++) {
                if (endOfWord.indexOf(text[i]) != -1 && i < border) {
                    state = true;
                    index = i;
                }
            }
        }
        return text.substring(0, index) + "...";
    }
})

