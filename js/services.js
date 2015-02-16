(function () {
    var app = angular.module("services", []);

    app.service("carTypeService", function () {
        this.loadCarTypes = function () {
            var carModels = [new Model("MKZ", true, 15000.35, "img/mkz.png"), new Model("MKS", true, 22000.40, "img/mks.png")];
            var crossoverModels = [new Model("MKC", false, 10000.00, "img/mkc.png"), new Model("MKX", false, 8500.25, "img/mkx.png"), new Model("MKT", true, 3500.50, "img/mkt.png")];
            var carType = new CarType("Cars", carModels);
            var crossoverType = new CarType("Crossovers", crossoverModels);
            return [carType, crossoverType];
        }
    })
})();