import angular from 'angular';
import uiRouter from 'angular-ui-router';
import serviceModule from './../../services/util/util.service.module'
import applicationModule from './../../services/application/application.module'
import homeComponent from './home.component';


let homeModule = angular.module('home', [
  uiRouter,
  serviceModule, 
  applicationModule
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject' 

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve:{
        homeData: () => {
          return "data from router !!"
        }
      }
    });
})
.component('home', homeComponent)
.name;

export default homeModule;
