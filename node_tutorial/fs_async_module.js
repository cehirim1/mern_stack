
//we will use callbacks for the async fs methods
// const fs = require('fs');
// const { readFile } = require('fs/promises');

// const readFirst = fs.readFile('./first.txt', 'utf-8',(err, result)=>{

//     if(err){
//         console.log(err);
//         return;
//     }
//     const myFirst = result;
//     fs.readFile('./next.txt', 'utf-8', (err, result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         const myNext = result;
    
//         console.log(myFirst);
//         console.log(myNext);
//         fs.writeFile('./another.txt', myFirst + myNext, (err, result)=>{

//                         if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(result);//we are expecting undefined here
//         })
//     })
// });

//the above code will lead to a callback hell, alternatively we use promises(method chaining) or async/await



//flag outputs the new file contents.

