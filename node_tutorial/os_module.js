//built-in modules
//OS Module - provides many useful properties and methods for interacting with the OS and server.
const os = require('os');


//info about current user
const user = os.userInfo()
console.log(user)


//method returns the system uptime in seconds
console.log("The system uptime is: "+ os.uptime() + " seconds");

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeNem: os.freemem(),
}

console.log(currentOS);
