(function () {
    var app = angular.module("services", []);

    app.service("carModelService", function ($http) {

        this.retrieveCarModels = function () {
            var carModels = [];
            $http.get("resources/car-models.json").success(function (data) {
                angular.forEach(data, function (value) {
                    carModels.push(new Model(value.name, value.canPurchase, value.price, value.img));
                });
            }).error(function () {
                alert("error loading car models");
            });
            return carModels;
        };

        this.retrieveCrossoverModels = function () {
            var crossoverModels = [];
            $http.get("resources/crossover-models.json").success(function (data) {
                angular.forEach(data, function (value) {
                    crossoverModels.push(new Model(value.name, value.canPurchase, value.price, value.img));
                });
            }).error(function () {
                alert("error loading crossover models");
            });
            return crossoverModels;
        }
    });

    app.service("carTypeService", ["carModelService", function (carModelService) {
        this.loadCarTypes = function () {

            var carModels = carModelService.retrieveCarModels();
            var crossoverModels = carModelService.retrieveCrossoverModels();

            var carType = new CarType("Cars", carModels);
            var crossoverType = new CarType("Crossovers", crossoverModels);
            return [carType, crossoverType];
        }
    }]);

    app.service("chatService", ["$rootScope", "$timeout", function ($rootScope, $timeout) {

        var TIMEOUT_TO_WAIT_TO_SEND_WELCOME_MESSAGE = 2000;
        var chatHistory = [];
        var socketConnection = io.connect("http://localhost:8080");

        console.log("Connection with chat server successful");

        socketConnection.on("server-message", function (message) {
            console.log("Server message received: " + message);
            $timeout(function () {
                chatHistory.push(new ChatLine(message));
                $rootScope.$broadcast("serverMessage");
            }, TIMEOUT_TO_WAIT_TO_SEND_WELCOME_MESSAGE);
        });

        this.retrieveChatHistory = function () {
            return chatHistory;
        };

        this.sendMessage = function (message) {
            socketConnection.emit("client-message", message);
            chatHistory.push(new ChatLine(message));
            $rootScope.$broadcast("serverMessage");
            console.log("Message sent: " + message);
        }
    }]);

})();