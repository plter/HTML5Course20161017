/**
 * Created by plter on 2016/12/16.
 */

angular.module("app").component("helloWorld", {
    // template: "<h1>{{word}}</h1>",
    templateUrl: "HelloWorld.template.htm",
    controller: function ($scope) {
        $scope.word = "Hello World 1";
    }
});