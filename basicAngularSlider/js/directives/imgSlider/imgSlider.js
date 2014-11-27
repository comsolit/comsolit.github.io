(function() {
    'use strict';

    angular
        .module('app')
        .directive('imgSlider', imgSlider);

    imgSlider.$inject = ['$window'];
    
    function imgSlider ($window) {
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                images: '='
            },
            templateUrl: 'templates/imgSlider/imgSlider.html'
        };
        return directive;

        function link(scope, element, attrs) {
            var timeout = 5000;
            var currentIndex = 0;
            var skipInterval = false;

            scope.isCurrentIndex = function (index) {
                return index == currentIndex;
            };

            function nextSlide() {
                if ((scope.images.length - 1) > currentIndex) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
            }

            function prevSlide() {
                if (currentIndex == 0) {
                    currentIndex = scope.images.length - 1;
                } else {
                    currentIndex--;
                }
            }

            scope.next = function () {
                nextSlide();
                skipInterval = true;
            };

            scope.prev = function () {
                prevSlide();
                skipInterval = true;
            };

            var slide = setInterval(function () {
                if (!skipInterval) {
                    scope.next();
                    scope.$apply();
                }
                skipInterval = false;

            }, timeout);
        }
    }

})();