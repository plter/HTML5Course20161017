/**
 * Created by plter on 2016/12/16.
 */

angular.module("app", []).controller("main", function ($scope, $http) {

    $scope.formSubmitHandler = function () {
        $http.post("/hello", {name: $scope.name}).then(function (result) {
            $scope.responseValue = result.data;
        });
    }
});