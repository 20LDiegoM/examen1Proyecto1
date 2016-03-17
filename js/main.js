(function() {
  'use strict';

  angular
    .module('bankCR', ['ui.router', 'ngStorage'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('mainController', mainController);


function config($stateProvider, $urlRouterProvider) {


  $stateProvider
    .state('register', {
      url: '/',
      templateUrl: 'views/register.html',
      controller: 'registerCtrl',
      controllerAs: 'register'
    })
    .state('transfers', {
      url: '/transfers',
      templateUrl: 'views/transfers.html',
      controller: 'transfersCtrl',
      controllerAs: 'transfers'
    })
    .state('summary', {
      url: '/summary',
      templateUrl: 'views/summary.html',
      controller: 'summaryCtrl',
      controllerAs: 'summary'
    });

  $urlRouterProvider.otherwise('/');
}

function mainController() {

}
})();
