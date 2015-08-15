'use strict';

app.provider('walletPvd', function () {
  this.$get = function ($resource) {
    return $resource('http://localhost:8001/mockapi/myWallet.json', {}, {
      query: { method: 'GET', isArray: false }
    });
  };
});
