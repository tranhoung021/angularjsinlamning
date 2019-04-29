let app = angular
    .module("cardApp", ["ngRoute", "ngCookies"])
    .factory("productService", function ($http) {
        return {
            itemList: function () {
                return $http.get("http://localhost:3001/api/items").then(function (respone) {
                    return respone.data;
                })
            }
        }
    });

app.config(config);
app.run(run);

run.$inject = ["$rootScope", "$location", "$cookies", "$http"];
function run($rootScope, $location, $cookies, $http) {

    $rootScope.globals = $cookies.getObject("globals") || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common["Authorization"] = 'Bearer ' + $rootScope.globals.currentUser.token;

    }

    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        var restrictedPage = $.inArray($location.path(), ["/login", "/register"]) === -1;

        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path("/login");
        }
    })
}