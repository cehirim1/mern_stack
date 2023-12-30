//writeable stream
//read stream
//duplex stream
//transform stream


const {writeFileSync} = require("fs");
for (let index = 0; index < 10; index++) {
  writeFileSync("./stream1.txt", `hello world ${index}\n`, {flag: "a"});
    
}

//default 64kb buffer
//last buffer- remaining data
//high water mark - controls the amount of data that can be written to the stream

const{createReadStream} = require('fs');
const stream = createReadStream('./stream1.txt', {highWaterMark: 90000, encoding: 'utf8'});

stream.on('data', (result)  =>{
console.log(result)
});


//error event
stream.on('error', (err) => {
console.log(err);//could be filepath error
});
