
var app = angular.module("sportsStore");
app.constant("dataUrl", "http://localhost:5500/products");
app.controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
    $scope.data = {};

     $http.get(dataUrl)
        .success(function (data) {
            $scope.data.products = data;
        })
        .error(function (error) {
            $scope.data.error = error;
        });
});


