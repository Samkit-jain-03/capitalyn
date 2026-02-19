/* global angular */
var app = angular.module("reportsApp", []);


app.controller("ReportsController", function ($scope, $http) {


    $scope.statusMessage = "Ready";


    // Load JSON data
    $http.get("reports-data.json").then(function (response) {
        $scope.customers = response.data.customers;
        $scope.assets = response.data.assets;
        $scope.loans = response.data.loans;
    });


    // Handles ng-click, ng-focus, ng-blur, mouse events
    $scope.updateStatus = function (message) {
        $scope.statusMessage = message;
    };
});


