angular.module('bankCR')
.controller('transfersCtrl', ['$scope', 'transfersServices', '$localStorage', 'getStorage',
  function ($scope, transfersServices, $localStorage, getStorage) {
    $scope.transfersType = transfersServices.transfersType;
    $scope.date = transfersServices.currentDate;
    $scope.transfers = getStorage.getTransfers();

  $scope.addTransfers = function() {
      $scope.transfers.push({
        'date': $scope.newDate,
        'transfersType': $scope.newType,
        'amount': $scope.newAmount,
        'description': $scope.newDescription
      });
      getStorage.updateTransfers($scope.transfers);
      $scope.newDate = '';
      $scope.newAmount = '';
      $scope.newDescription = '';
      $scope.newType = '';
  };
}]);
