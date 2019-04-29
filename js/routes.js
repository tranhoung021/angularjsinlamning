app.config(function($routeProvider, $locationProvider) {

    $routeProvider.when("/", {
        templateUrl: "views/gridCards.html"
    })

    .when("/showgrid", {
        templateUrl: "views/gridCards.html"
    })

    .when("/showlist", {
        templateUrl: "views/listCards.html"
    })

    .when("/login", {
        controller: "loginController",
        templateUrl: "../views/login/loginForm.html",
        controllerAs: "vm"                
    })

    .when("/register", {
        controller: "registerController",
        templateUrl: "../views/register/registerForm.html",
        controllerAs: "vm"                
    })

    .when("/userpage", {
        controller: "userPageController",
        templateUrl: "../views/userPage/userPage.html",
        controllerAs: "vm"
    })
})