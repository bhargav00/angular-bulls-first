import angular from 'angular';
//import mocks from 'angular-mocks';
let context = require.context('./test/components/', true, /\.test\.js/);
context.keys().forEach(context);