(function () {
    var app = angular.module("services", []);

    app.service("carTypeService", function ($http) {
        this.loadCarTypes = function () {

            var carModels = [];

            $http.get("src/car-models.json").success(function (result) {
                angular.forEach(result, function (value) {
                    carModels.push(new Model(value.name, value.canPurchase, value.price, value.img));
                });
            }).error(function () {
                alert("error loading car models");
            });

            var crossoverModels = [new Model("MKC", false, 10000.00, "img/mkc.png"), new Model("MKX", false, 8500.25, "img/mkx.png"), new Model("MKT", true, 3500.50, "img/mkt.png")];
            var carType = new CarType("Cars", carModels);
            var crossoverType = new CarType("Crossovers", crossoverModels);
            return [carType, crossoverType];
        }
    })
})();