import angular from 'angular'
import ngRedux from 'ng-redux'
import rootReducer from '../reducers'

export default angular
  .module('bullsfirstApp.store', [ngRedux])
  .config(($ngReduxProvider) => {
    'ngInject'

    const middlewares = []

    const storeEnhancers = []
    if (window.devToolsExtension) {
      storeEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
    }

    $ngReduxProvider.createStoreWith(rootReducer, middlewares, storeEnhancers)
  })
  .run(($ngRedux, $rootScope, $timeout) => {
    'ngInject'

    $ngRedux.subscribe(() => {
      $timeout(() => $rootScope.$apply(() => {}), 100)
    })
  })
  .name
