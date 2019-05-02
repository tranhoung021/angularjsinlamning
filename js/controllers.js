app.controller("cardController", function ($scope, $http) {

    
    $http.get("http://localhost:3001/api/items")
    .then(function(res) {
        $scope.itemList = res.data; 
    });

    $scope.showProducts = "5";

    $scope.sortItem = "";

    // filter search
    $scope.search = function(item) {
        if($scope.searchText == undefined) {
            return true;
        } else {
            if(
                item.productname.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
            ) {
                return true;
            };
        }
        return false;
    };

    // RatingCalculator
    const starsTotal = 5;

    $scope.rating = function(input) {
        const starProcentage = (input / starsTotal) * 100;
        const starProcentageRounded = `${Math.round(starProcentage /10) * 10}%`;

        return starProcentageRounded;
    }
    
});