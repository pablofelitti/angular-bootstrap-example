(function () {
    var app = angular.module("main", []);

    var carModels = [new Model("MKZ", true, 15000.35, "img/mkz.png"), new Model("MKS", true, 22000.40, "img/mks.png")];
    var crossoverModels = [new Model("MKC", false, 10000.00, "img/mkc.png"), new Model("MKX", false, 8500.25, "img/mkx.png"), new Model("MKT", true, 3500.50, "img/mkt.png")];
    var carType = new CarType("Cars", carModels);
    var crossoverType = new CarType("Crossovers", crossoverModels);
    var carTypes = [carType, crossoverType];

    app.controller("MainController", function () {
        this.carTypes = carTypes;
    });

    app.controller("TabController", function () {
        this.currentTab = 1;
        this.selectTab = function (tabNumber) {
            this.currentTab = tabNumber;
        };
        this.isSelected = function (tabNumber) {
            if (this.currentTab === tabNumber) {
                return true;
            } else {
                return false;
            }
        }
    });

    app.controller("ReviewController", function () {
        this.review = {};
        this.addReview = function (model) {
            model.addReview(this.review);
        }
    });
})
();

function CarType(name, models) {
    this.name = name;
    this.models = models;
}

function Model(name, canPurchase, price, img) {
    this.name = name;
    this.canPurchase = canPurchase;
    this.price = price;
    this.img = img;

    this.addReview = function (review) {
        this.reviews.push(review);
    }
}