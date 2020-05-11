(function () {
	'use strict';


angular.module('MyFirstApp', [])

.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

	$scope.inputeat = "";
	$scope.Output  = "";
	$scope.Checker = function (){
				
				if($scope.inputeat != ""){

					$scope.Output = GetUserMsg( GetLunchItems($scope.inputeat) );

				}
				else{
					$scope.Output =  "Please enter data first";
				}
	};

	function GetLunchItems(items){
		var i = items.split(',');
		return i.length;
	}

	function GetUserMsg(input){
		if(input <= 3){
			return "Enjoy!";
		}
		else{
			return "Too much!";
		}

	}

}



})();