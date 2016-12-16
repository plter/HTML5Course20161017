/**
 * Created by plter on 2016/12/16.
 */

angular.module("app", []).controller("main", function ($scope, $interval) {
    $scope.word = "Hello";

    $scope.students = [
        {name: "张三", age: 1},
        {name: "李四", age: 3},
        {name: "王五", age: 5},
        {name: "赵六", age: 2}
    ];

    $scope.count = 0;
    $scope.text = "Hello World";

    $interval(function () {
        $scope.count++;
    }, 1000);
});