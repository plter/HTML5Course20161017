/**
 * Created by plter on 2016/12/16.
 */

angular.module("app", []).controller("main", function ($scope) {

    $scope.count = 0;

    $scope.btnClickedHandler = function () {
        console.log("Clicked");

        $scope.count++;
    }
});