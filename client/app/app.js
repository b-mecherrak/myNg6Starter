import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Components from './components/components';
import AppComponent from './app.component';

import vmFooterModule from './components/vm-footer/vm-footer.module'
import vmfooterOtherModule from './components/vm-footer-other/vm-footer-other.module'
import 'normalize.css';

angular.module('app', [
  uiRouter,
  vmFooterModule,
  vmfooterOtherModule,
  Components
])
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    'ngInject'
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .component('app', AppComponent)
  .config(['$provide', function($provide) {

  $provide.decorator('vmFooterDirective', [
    '$delegate', '$injector',
    function vmFooterDirectiveDecorator($delegate, $injector) {
      console.log($injector.get('vmFooterOtherDirective'))
      $delegate = $injector.get('vmFooterOtherDirective')
        // $delegate[0].template = require('./footer.template.html')
      return $delegate;
    }
  ]);
}])