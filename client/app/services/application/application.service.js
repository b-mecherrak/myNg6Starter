export default class ApplicationService {
    constructor(UtilService){
        'ngInject'
        this.UtilService = UtilService
    }
    getApplicationData() {
       return  this.UtilService.getUser().then((data) => data)
    }
}