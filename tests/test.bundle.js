import 'angular';
import 'angular-mocks/angular-mocks';

let context = require.context('.', true, /.+\.spec\.js?$/);
context.keys().forEach(context);
