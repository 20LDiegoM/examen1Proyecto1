angular.module('bankCR')
.controller('registerCtrl', ['$scope', 'registerService', '$localStorage', 'getStorage', '$state',
  function ($scope, registerService, $localStorage, getStorage, $state) {
    $scope.names = registerService.names;
    $scope.currentName = registerService.inCurrencyName;
    $scope.inCurrency = registerService.inCurrency;
    $scope.currencies = registerService.currency;
    $scope.accountType = registerService.accountType;
    $scope.inAccountType = registerService.inAccountsType;
    $scope.transfers = getStorage.getTransfers();

  $scope.addClient = function() {
      $state.go('summary');
    }
}]);
