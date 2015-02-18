(function () {
    var app = angular.module("services", []);

    app.service("carTypeService", function ($http) {
        this.loadCarTypes = function () {

            var carModels = [];
            var crossoverModels = [];

            $http.get("src/car-models.json").success(function (result) {
                angular.forEach(result, function (value) {
                    carModels.push(new Model(value.name, value.canPurchase, value.price, value.img));
                });
            }).error(function () {
                alert("error loading car models");
            });

            $http.get("src/crossover-models.json").success(function (result) {
                angular.forEach(result, function (value) {
                    crossoverModels.push(new Model(value.name, value.canPurchase, value.price, value.img));
                });
            }).error(function () {
                alert("error loading crossover models");
            });

            var carType = new CarType("Cars", carModels);
            var crossoverType = new CarType("Crossovers", crossoverModels);
            return [carType, crossoverType];
        }
    })
})();