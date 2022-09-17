//CommomJS, every file is module (bydefault)
// Modules - encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHello = require("./5-utils");
const data = require("./6-alternative-flavor");

// When we set up everything, if we have a function in the module that we invoked, yet that code will run eventhough we didn't assign variable for it
require('./7-mind-grenade')

console.log(data);
sayHello('susam');
sayHello(names.john);
sayHello(names.peter);