class HomeController {
  constructor(UtilService, $log, $timeout) {
    'ngInject'
    this.UtilService = UtilService
    // this.ApplicationService = ApplicationService
    this.$log = $log
    this.$timeout = $timeout
  }
  $onInit () {
    this.name = 'home';

    this .test = 'data for test'
    // this.ApplicationService.getApplicationData().then((data) => {
    //   that.user = data.data
    // })

    this.$timeout(() => {
      console.log('loaded')
    }, 2000)
  }

  getData() {
     this.UtilService.getUser().then((data) => {
        $timeout(() => {
          this.user = data.data
        }, 0);
    })
  }
}

export default HomeController;
