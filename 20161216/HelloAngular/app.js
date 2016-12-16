/**
 * Created by plter on 2016/12/16.
 */

angular.module("app", []).controller("main", function ($scope, $http, $interval) {
    $scope.word = "Hello";

    $scope.count = 0;
    $scope.text = "Hello World";

    $interval(function () {
        $scope.count++;
    }, 1000);

    $http.get("data.json").then(function (result) {
        $scope.students = result.data;
    });
});