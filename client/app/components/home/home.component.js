import template from './home.html';
import controller from './home.controller';
import './home.scss';

let homeComponent = {
  bindings: {
    homeData : '<'
  },
  template: template,
  controller: controller
};

export default homeComponent;
