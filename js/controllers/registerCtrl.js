angular.module('bankCR', ['ngRoute'])
.controller('registerCtrl', ['$scope', 'registerService', '$localStorage', 'getStorage',
  function ($scope, registerService, $localStorage, getLocalStorage) {
    $scope.name = registerService.ownerName;
    $scope.currentName = registerService.inCurrencyName;
    $scope.inCurrency = registerService.inCurrency;
    $scope.currencies = registerService.currency;
    $scope.accountsType = registerService.accountType;
    $scope.inAccountType = registerService.inAccountsType;
    $scope.transfers = getLocalStorage.gettransfers();

  $scope.addClient = function() {
      $scope.name = angular.element('name').value;
    }
}])
