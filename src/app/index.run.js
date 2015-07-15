(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope) {

    $log.debug('runBlock end');
    /*$rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
        //console.log(toState +"::"+fromState);
        event.preventDefault();
        // transitionTo() promise will be rejected with
        // a 'transition prevented' error
      });*/
  }

})();
