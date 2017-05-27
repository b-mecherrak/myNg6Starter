import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
  uiRouter,
  Components
])
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    'ngInject'
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .component('app', AppComponent);