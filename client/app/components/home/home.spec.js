import 'angular-mocks'
import HomeModule from './home'
fdescribe('Home', () => {
  let $rootScope, $state, $location, $componentController, $compile;
  let $filter;
  beforeEach(angular.mock.module(HomeModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $filter = $injector.get('$filter');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).toEqual('home');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('home', {
        $scope: $rootScope.$new()
      });
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<home></home>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.find('h1').html()).toEqual('Found in home.html');
    });

  });

  fdescribe('Html Element', () => {
    // view layer specs.
    let scope, element;

    beforeEach(() => {
      scope = $rootScope.$new();
      
      element = angular.element('<home></home>');
     
      scope.$apply(() => { 
       scope.user = { name: "John" }; 
       $compile(element)(scope); 
      });
    });

    it('should be defined', () => {
        expect(element).toBeDefined()
        const ctrl = element.controller('home')
        console.log(ctrl)
        expect(ctrl).toBeDefined()
    })
  });

  describe('getData', () => {
    let $componentController
    let $rootScope
    let UtilService
    let $q
    beforeEach(inject((_$componentController_, _$rootScope_, _$q_, _UtilService_) => {
      $rootScope = _$rootScope_
      $componentController = _$componentController_
      $q = _$q_
      UtilService = _UtilService_
    }))
    it('should  get mocked user ', () => {
      const $scope = $rootScope.$new()

      let deferred = $q.defer();
      spyOn(UtilService, 'getUser').and.returnValue(deferred.promise)

      const $ctrl = $componentController('home', { $scope: $scope, UtilService: UtilService }, {})
      $ctrl.$onInit()

      $ctrl.getData()

      deferred.resolve({
        data: {
          username: 'bendal',
          level: 5
        }
      })
      $scope.$apply()

      expect($ctrl.user).toEqual({ username: 'bendal', level: 5 })
    })

    it('should  return user 2 ', () => {
      const $scope = new $rootScope.$new()
      const $ctrl = $componentController('home', { $scope: $scope }, {})
      $ctrl.$onInit()
      let then = jasmine.createSpy('then')

      spyOn($ctrl.UtilService, 'getUser').and.returnValue({
        then: then
      })

      $ctrl.getData()
      expect(then).toHaveBeenCalled()
    })
  })
});
