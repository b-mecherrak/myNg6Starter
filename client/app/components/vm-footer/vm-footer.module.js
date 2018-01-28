import angular from 'angular';
import { vmfooterComponent } from './vm-footer.component.js'

export default angular.module('vmfooterModule', [])
.config([ '$provide', function($provide) {

  $provide.decorator('$log', [
    '$delegate',
    function $logDecorator($delegate) {
        console.log($delegate)
      var originalWarn = $delegate.warn;
      $delegate.warn = function warn(msg) {
        msg = 'Decorated Warn: ' + msg;
        originalWarn(msg)
      };
      return $delegate;
    }
  ]);
}])
  .component('vmFooter', vmfooterComponent)
  .name