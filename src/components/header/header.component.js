import angular from 'angular'
import './header.scss'
export default angular
  .module('todoApp.components.header', [])
  .component('header', {
    templateUrl: require('./header.view.html')
  }).name
