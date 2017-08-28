import { bindActionCreators } from 'redux'
import * as TodoActions from '../../actions'

class AppController {
  constructor ($ngRedux, $scope) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this)
    $scope.$on('$destroy', unsubscribe)
  }

  mapStateToThis = (state) => ({
    accounts: state.accounts
  })

  mapDispatchToThis = (dispatch) => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
}

export default {
  controller: AppController,
  template: `
    <div class="todoapp">
      <header></header>
      <main-section accounts="$ctrl.accounts" actions="$ctrl.actions"></main-section>
    </div>  
  `
}
