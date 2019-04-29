app.controller("cardController", function($scope, productService, $http) {
    productService.itemList().then(function (data) { 
        $scope.itemList = data;
        $scope.rowLimit = {
        "type": "select",
        "name": "rowLimit",
        "value": "5",
        "values": ["5","10","20", "50", "100"]
    };

    $http.get("http://localhost:3001/api/items")
    .then((res) => $scope.itemList = res.data)

    $scope.sortItem = "";

    $scope.search = function (item) {
        if ($scope.searchText == undefined) {
            return true;
        } else {
            if (
                item.productname.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
            ) {
                return true;
            };
        }
        return false;
    };


    const starsTotal = 5;

    $scope.rating = function (input) {
        const starProcentage = (input / starsTotal) * 100;
        const starProcentageRounded = `${Math.round(starProcentage / 10) * 10}%`;

        return starProcentageRounded;
    }


    
    })
})
