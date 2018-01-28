import angular from 'angular';
import { vmfooterOtherComponent } from './vm-footer-other.component.js'

export default angular.module('vmfooterOtherModule', [])
  .component('vmFooterOther', vmfooterOtherComponent)
  .name