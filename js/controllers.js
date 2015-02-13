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
            return this.currentTab === tabNumber;
        }
    });

    app.controller("ReviewController", ["$scope", function ($scope) {
        $scope.options = [{value: 0, text: "Cooool"}, {value: 1, text: "Baaaad"}];
        this.review = new Review();
        this.addReview = function (model) {
            model.addReview(this.review);
            this.review = new Review();
        };
    }]);
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
    this.reviews = [];

    this.addReview = function (review) {
        this.reviews.push(review);
    }
}

function Review(vote, description) {
    this.vote = vote;
    this.description = description;
    this.isCool = function () {
        if (this.review.vote === undefined) {

        } else {
            return this.review.vote === 0;
        }
    }
}