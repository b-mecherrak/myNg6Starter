import angular from  'angular'
import UtilService from './util.service'

let serviceModule = angular.module('serviceModule', [])
                    .service('UtilService', UtilService)
                    .name ; 
export default serviceModule





