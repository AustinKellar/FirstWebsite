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
	$scope.facebook = function() {
		$window.open('https://www.facebook.com/austin.kellar.39');
	};
	$scope.github = function() {
		$window.open('https://github.com/AustinKellar');
	};
	$scope.linkedin = function() {
		$window.open('https://www.linkedin.com/in/austin-kellar-36abab122/');
	};
	$scope.itch = function() {
		$window.open('https://themightyspidey.itch.io/');
	};
}]);