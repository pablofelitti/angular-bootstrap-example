(function () {
    var app = angular.module("main", []);

    var carTypes = [{carType: "Cars", models: ["MKZ", "MKS"]}, {carType: "Crossovers", models: ["MKC", "MKX", "MKT"]}];

    app.controller("MainController", function () {
        this.carTypes = carTypes;
    })
})();