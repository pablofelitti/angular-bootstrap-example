(function () {
    var app = angular.module("main", []);

    var carTypes = [{
        name: "Cars",
        models: [{name: "MKZ", canPurchase: true, price: 15000.35, img: "img/mkz.png"}, {
            name: "MKS",
            canPurchase: true,
            price: 22000.40,
            img: "img/mks.png"
        }]
    }, {
        name: "Crossovers",
        models: [{name: "MKC", canPurchase: false, price: 10000.00, img: "img/mkc.png"}, {
            name: "MKX",
            canPurchase: false,
            price: 8500.25,
            img: "img/mkx.png"
        }, {
            name: "MKT", canPurchase: true, price: 3500.50, img: "img/mkt.png"
        }]
    }];

    app.controller("MainController", function () {
        this.carTypes = carTypes;
    })
})();