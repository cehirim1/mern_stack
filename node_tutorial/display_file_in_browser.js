//sending file data to the client
const http = require('http');
const fs=require('fs');

http.createServer((req, res) => {
    // const read = fs.readFileSync('./streams.txt', 'utf8');

    // res.end(read);


    //refactor for chunk content-length
    const fileStream = fs.createReadStream('./streams.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);//pushes from read stream to write stream (can read & write in chunks)
    })
    fileStream.on('error', (error) => {
        fileStream.pipe(error);
    })
}).listen(5000);