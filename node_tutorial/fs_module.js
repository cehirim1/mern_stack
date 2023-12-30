
const fs = require('fs');

const readFirst = fs.readFileSync('./first.txt', 'utf-8');
const readNext = fs.readFileSync('./next.txt', 'utf-8');
const write = fs.writeFileSync('./another.txt', 'I added an additional file and text to my file using the write function.', {flag: 'a'});


console.log(readFirst)
console.log(readNext)

//flag outputs the new file contents.

