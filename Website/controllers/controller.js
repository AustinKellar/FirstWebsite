var app = angular.module('app', []);
app.controller('mainController', ['$scope', '$window', function($scope, $window) {
	$scope.playAlienInvasion = function() {
		$window.open('https://themightyspidey.itch.io/alien-invasion-austin-kellar-2');
	};
	$scope.alienInvasionGithub = function() {
		$window.open('https://github.com/AustinKellar/TheBoyz');
	};
	$scope.hexGithub = function() {
		$window.open('https://github.com/AustinKellar/Hex');
	};
}]);