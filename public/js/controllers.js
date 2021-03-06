(function () {
    var app = angular.module("controllers", []);

    app.controller("MainController", ["carTypeService", "$scope", function (carTypeService, $scope) {
        $scope.carTypes = carTypeService.loadCarTypes();
    }]);

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
        $scope.selectedVote = $scope.options[0].value;
        $scope.review = new Review();
        this.addReview = function (model) {
            $scope.review.vote = $scope.selectedVote;
            model.addReview($scope.review);
            this.initController();
        };
        this.initController = function () {
            $scope.review = new Review();
            $scope.selectedVote = 0;
            $scope.reviewForm.$setPristine();
        };
    }]);

    app.controller("NavigationBarController", ["$rootScope", function ($rootScope) {
        $rootScope.hideChatController = false;

        this.toggleChat = function () {
            $rootScope.hideChatController = !$rootScope.hideChatController;
        }
    }]);

    app.controller("ChatController", ["$scope", "$timeout", "chatService", function ($scope, $timeout, chatService) {
        var controllerScope = $scope;
        controllerScope.chatHistory = [];
        controllerScope.newChatLine = new ChatLine(null);
        $scope.$on("serverMessage", function (event, data) {
            controllerScope.chatHistory = chatService.retrieveChatHistory();
        });

        this.sendMessage = function () {
            chatService.sendMessage($scope.newChatLine.text);
            this.initController();
        };

        this.initController = function () {
            $scope.newChatLine = new ChatLine(null);
        };
    }]);
})
();