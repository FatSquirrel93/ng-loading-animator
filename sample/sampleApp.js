var app = angular.module('app', []);

app.controller('sampleController', function($scope) {
    var vm = this;
    $scope.name = 'SampleButton';

    $scope.item = {name: 'Sample item', id: 1};

    $scope.fakeLoading = function(item) {
        window.setTimeout(function() {
            //generate a random new name to trigger the change
            $scope.item.name = 'Sample item' + Math.floor((Math.random() * 1000) + 1);
            $scope.item.id = Math.floor((Math.random() * 1000) + 1);
            //apply the changes
            $scope.$apply();
        }, 2000);

    }


})
