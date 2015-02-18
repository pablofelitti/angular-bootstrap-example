(function () {
    var app = angular.module("controllers", []);

    app.controller("MainController", ["carTypeService", function (carTypeService) {
        this.carTypes = carTypeService.loadCarTypes();
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
    }])
})
();