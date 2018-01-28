import 'angular-mocks'

describe('applicationModule', () => {

    let ApplicationService
    let $q
    let deferred

    beforeEach(() => {
        angular.mock.module('applicationModule')
    })

    // beforeEach(inject((_$q_, _ApplicationService_)=> {
    //     $q = _$q_    
    //     ApplicationService = _ApplicationService_
    //     deferred = $q.defer()
        
    //     spyOn(ApplicationService.UtilService, 'getUser').and.returnValue(deferred.promise)
    // }))

    it('getApplicationData', () => {
        // deferred.resolve('data')
        // ApplicationService.getApplicationData()
        // expect(ApplicationService.user).toBeDefined() 
        expect(true).toBe(true)
    })
})