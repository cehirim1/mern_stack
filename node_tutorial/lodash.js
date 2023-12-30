//loadash

const __ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = __.flattenDeep(items);
console.log(newItems);
console.log("hello world to detect changes as always");
console.log('to run file, we can modify the package.json file to set start to a keyword we want and what we want it to do')
