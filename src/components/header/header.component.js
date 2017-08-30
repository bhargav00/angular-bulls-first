import angular from 'angular'
import './header.scss'
export default angular
  .module('bullsfirst.components.header', [])
  .component('header', {
    templateUrl: require('./header.view.html')
  }).name
