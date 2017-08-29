import angular from 'angular'
import './table.scss'
export default angular
  .module('todoApp.components.table', [])
  .component('table', {
    bindings: {
      accounts: '<'
    },
    templateUrl: require('./table.view.html')
  })
  .name
