import 'angular-mocks'
describe('UtilService' , () => {
    let $httpBackend
    let service 
    beforeEach(() => {
        angular.mock.module('serviceModule')
    })
    beforeEach(inject(($injector) => {
        $httpBackend = $injector.get('$httpBackend')
        service = $injector.get('UtilService')
        $httpBackend.when('GET', 'app/mocks/user.json')
                    .respond({ username: 'gabriel', level: 5 })
    }))
    
    afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation(false)
     $httpBackend.verifyNoOutstandingRequest()
   })

    it('should retrun user info', (done) => {
     $httpBackend.expectGET('app/mocks/user.json')
     service.getUser().then((data) => {
         expect(data).toBeDefined()
         done()
     })
     $httpBackend.flush()
    })

}) 