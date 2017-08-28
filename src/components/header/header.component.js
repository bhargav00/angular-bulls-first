import angular from 'angular'

export default angular
  .module('todoApp.components.header', [])
  .component('header', {
    templateUrl: require('./header.view.html')
  }).name
