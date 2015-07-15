(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        onEnter: function(){
          angular.element("#non-offers").show();
          angular.element("#sparkpay-app").hide();
        }
      })
      .state('home.activateOffers',{
        url:'/offer/list',
        onEnter: function(){
         angular.element("#non-offers").hide();
          angular.element("#sparkpay-app").show();
        }
      });

    $locationProvider.html5Mode(false).hashPrefix('!');
    //$urlRouterProvider.otherwise('/');
  }

})();
