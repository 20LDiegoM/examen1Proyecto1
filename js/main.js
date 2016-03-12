(function() {
  'use strict';

  angular
    .module('bankCR', ['ngRoute', 'ngStorage', 'services'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('mainController', mainController);
})

function config($stateProvider, $urlRouterProvider) {


  $stateProvider
    .state('register', {
      url: '/',
      templateUrl: 'views/register.html',
      controller: 'registerCtrl',
      controllerAs: 'register'
    })
    .state('transfers', {
      url: '/',
      templateUrl: 'views/transfers.html',
      controller: 'transfersCtrl',
      controllerAs: 'transfers'
    })
    .state('summary', {
      url: '/',
      templateUrl: 'views/summary.html',
      controller: 'summaryCtrl',
      controllerAs: 'summary'
    })
    .state('details', {
      url: '/',
      templateUrl: 'views/details.html',
      controller: 'detailsCtrl',
      controllerAs: 'details'
    })
  $urlRouterProvider.otherwise('/')
}

function mainController() {

}
})();
