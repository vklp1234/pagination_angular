myapp.controller("pagination",function($scope){

   $scope.items = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 10
  ,$scope.maxSize = 5;

  $scope.makepage = function()
  {

  		$scope.items = [];
  		for (i=1;i<=1000;i++) {
      $scope.items.push({ num:'make '+i, done:false});
    }
  }
    $scope.makepage();
    $scope.numpages = function(){
    	return Math.ceil($scope.items.length/$scope.numPerPage)
    };
    $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
    $scope.items = $scope.item.slice(begin, end);
  });
});