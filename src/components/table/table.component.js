import angular from 'angular'
import './table.scss'
export default angular
  .module('bullsfirst.components.table', [])
  .component('table', {
    bindings: {
      accounts: '<'
    },
    templateUrl: require('./table.view.html')
  })
  .name
