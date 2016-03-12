angular.module('bankCR', ['ngRoute'])
.controller('transfersCtrl', ['$scope', 'transfersServices', '$localStorage', 'getStorage',
  function ($scope, transfersServices, $localStorage, getLocalStorage) {
    $scope.transfersType = transfersServices.transfersType;
    $scope.date = transfersServices.currentDate;
    $scope.transfers = getLocalStorage.gettransfers();

  $scope.addTransfers = function() {
      $scope.transfers.push({
        'date': $scope.newDate,
        'transfersType': $scope.newType,
        'amount': $scope.newAmount,
        'description': $scope.newDescription
      });
      getLocalStorage.updatetransfers($scope.transfers);
      $scope.newDate = '';
      $scope.newAmount = '';
      $scope.newDescription = '';
      $scope.newType = '';
  };
}]);
