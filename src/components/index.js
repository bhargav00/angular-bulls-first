import angular from 'angular'
import mainSection from './main-section/main-section.component'
import table from './table/table.component'
import header from './header/header.component'

export default angular
  .module('bullsfirstApp.components', [mainSection, table, header])
  .name
