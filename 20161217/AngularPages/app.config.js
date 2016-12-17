/**
 * Created by plter on 2016/12/17.
 */

angular.module("app").config(
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix("!");

        $routeProvider.when("/page1", {
            template: "<div>Page 1</div>"
        }).when("/page2", {
            template: "<div>Page 2</div>"
        }).when("/hello", {
            template: "<hello></hello>"
        }).otherwise({
            template: "<div>Page default</div>"
        });
    }
);