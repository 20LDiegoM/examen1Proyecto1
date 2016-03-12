angular.module('services', [ngRoute])
.factory('registerService',
  function () {
    var ownerName = ['Jane Smith'],
        inCurrencyName = 'Jane Smith',
        inAccountsType = 'Cuenta de Ahorros',
        accountType = ['Cuenta en cheques', 'Cuenta de Ahorros'],
        inCurrency = 'CRC',
        currency = ['USD', 'CRC'];

    return {
      currency: currency,
      inCurrency: inCurrency,
      accountType: accountType,
      inAccountsType : inAccountsType,
      ownerName : ownerName,
      inCurrencyName : inCurrencyName
    };
  })

.factory('transfersServices',
  function() {
    var transfersType = ['Credito', 'Debito'],
        date = new Date();

    return {
      transfersType: transfersType,
      date : date

    };
})

.factory('summaryService', function() {

    return {
    };
})

.factory('getStorage', function() {
      var transfersList = {};

    return {
      list: transfersList,

      updatetransfers: function (transfersArr) {
        if (window.localStorage && transfersArr) {
          localStorage.setItem("transfers", angular.toJson(transfersArr));
        }
        transfersList = transfersArr;
      },

      gettransfers: function () {
        transfersList = angular.fromJson( localStorage.getItem("transfers") );
        return transfersList ? transfersList : [];
      }
    };
})
