import '../assests/css/app.css'
import angular from 'angular'
import store from './store'
import containers from './containers'
import components from './components'

var App = angular.module('bullsfirstApp', [store, containers, components])
angular.element(document).ready(() => angular.bootstrap(document, ['bullsfirstApp']))
