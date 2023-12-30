const names = require('./utilities')
const sayHi = require('./function_module')


sayHi(names.peter);
sayHi(names.john);
sayHi('Susan');
// console.log(names);

//node app.js -  to run node file if no package manager is installed.
//modules are like encapsulation in Java