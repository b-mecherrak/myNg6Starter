class VmFooterComponent {
    constructor($log) {
        'ngInject'
        this.$log = $log
    }


    $onInit() {
        this.$log.warn('warn ....')
    }
}

export const vmfooterComponent = {
    controller: VmFooterComponent,
    template: require('./vm-footer.html'),
    binding: {}
}