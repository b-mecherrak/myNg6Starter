export default class UtilService {
    constructor($http) {
        'ngInject'
        this.$http = $http;
    }
    
    getUser() {
       return this.$http.get('app/mocks/user.json')
    }
}
