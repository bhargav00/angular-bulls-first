import angular from 'angular'
class MainSectionController {
  handleAddAccount = () => {
    this.actions.addAccount()
  }
}
export default angular
  .module('todoApp.components.mainSection', [])
  .component('mainSection', {
    bindings: {
      accounts: '<',
      actions: '<'
    },
    controller: MainSectionController,
    templateUrl: require('./main-section.view.html')
  })
  .name
