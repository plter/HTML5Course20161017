/**
 * Created by plter on 2016/12/17.
 */

angular.module("app", [
    "ngRoute"
]).config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("!");

    $routeProvider.when("/photo1", {
        templateUrl: "photo1.template.htm"
    }).when("/photo2", {
        templateUrl: "photo2.template.htm"
    }).otherwise({
        template: "<div>No content</div>"
    });
});