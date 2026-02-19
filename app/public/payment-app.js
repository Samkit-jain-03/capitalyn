/* global angular */
var app = angular.module("paymentApp", []);


app.controller("PaymentController", function ($scope, $http) {


    // Load JSON data using AngularJS
    $http.get("payment-data.json").then(function (response) {
        $scope.payments = response.data.payments;
        $scope.defaulters = response.data.defaulters;
    });


});
