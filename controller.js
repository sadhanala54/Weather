appm.controller("parkingCtrl", function($scope) {
	$scope.title = "1568";
    $scope.alertTopic = "Something went wrong",
    $scope.alertDescription = "you have to inform plate and color of the car",
        $scope.showAlert = true;
	$scope.cars = [];
	$scope.colors = ["white", "black", "green", "yellow", "red"];
	$scope.park = function(car) {
		car.entrance = new Date();
		$scope.cars.push(car);
		delete $scope.car;
	};
        $scope.closeAlert = function(){
        $scope.showAlert = false;
    };
});