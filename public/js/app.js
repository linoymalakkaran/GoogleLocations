'use strict';

// Declare app level module which depends on views, and components
var locationApp = angular.module('locationApp', []);

locationApp.controller('LocationController', ['$scope', '$http',
    function ($scope, $http) {
        //$http.get('http://intranet/svc_mail/rs/lookup/uaelocations').success(function(data) {
        $http.get('http://localhost:9000/rest/api/v2/locations').success(function (data) {
            var markers = data;
            if (!Array.isArray(markers) && data.markers
                && Array.isArray(data.markers)) {
                markers = data.markers;
            }
            markers.filter(function (d) {
                return (d.code === '999');
            }).pop().emirate_code = 'dxb';
            // markers.filter((d) => {
            //     return (d.code === '999');
            // }).pop().emirate_code = 'dxb';
            $scope.locationMarkers = markers;
            // console.log("Locations loaded as " + JSON.stringify($scope.locationMarkers));
        });

    }
]);

