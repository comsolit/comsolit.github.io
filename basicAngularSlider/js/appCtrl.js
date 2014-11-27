(function () {
    'use strict';

    angular
        .module('app')
        .controller('appCtrl', appCtrl);

    appCtrl.$inject = ['$scope']; 

    function appCtrl($scope) {
        $scope.images = [
            'images/landscape1.jpg',
            'images/landscape2.jpg',
            'images/landscape3.jpg',
            'images/landscape4.jpg'
        ];
    }
})();
