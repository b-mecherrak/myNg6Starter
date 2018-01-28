import angular from 'angular'
import serviceModule  from '../util/util.service.module'

import ApplicationService  from './application.service' 

let applicationModule = angular.module('applicationModule', [
    serviceModule
])
.service('ApplicationService', ApplicationService)
.name ; 

export default applicationModule