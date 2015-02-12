(function () {
    var app = angular.module("main", []);

    var carTypes = [{
        carType: "Cars",
        models: [{model: "MKZ", canPurchase: true}, {model: "MKS", canPurchase: true}]
    }, {
        carType: "Crossovers",
        models: [{model: "MKC", canPurchase: false}, {model: "MKX", canPurchase: false}, {
            model: "MKT",
            canPurchase: true
        }]
    }];

    app.controller("MainController", function () {
        this.carTypes = carTypes;
    })
})();