(function () {
    var app = angular.module("main", []);

    var carTypes = [{
        name: "Cars",
        models: [{name: "MKZ", canPurchase: true}, {name: "MKS", canPurchase: true}]
    }, {
        name: "Crossovers",
        models: [{name: "MKC", canPurchase: false}, {name: "MKX", canPurchase: false}, {
            name: "MKT", canPurchase: true
        }]
    }];

    app.controller("MainController", function () {
        this.carTypes = carTypes;
    })
})();