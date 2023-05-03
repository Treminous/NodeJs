//access global variables
const names=require('./firstFile');
const sayHi=require('./sayFile');
const items=require('./array.js');
console.log(items);
require('./addValue');
//display path
console.log(__dirname);
//set time interval
// setInterval(() => {
//     console.log('Hello World');

// },1000);

sayHi(names.john);
sayHi(names.peter);
sayHi('susan');