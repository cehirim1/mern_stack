const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// readFile("./first.txt", "utf8", (err, data) => {
//     if (err) return;
//     console.log(data);
// });

//to read two file, use a promise for asyncronous read.

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
// };

// getText("./first.txt")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//to write two file, use async/await approach for asyncronous and cleaner code instead of chaining.

// const start = async () => {
//   try {
//     const text = await getText("./first.txt", "utf8");
//     const nextText = await getText("./next.txt", "utf8");
//     const anotherText = await getText("./another.txt", "utf8");
//     console.log(text);
//     console.log(nextText);
//     console.log(anotherText);
//   } catch (err) {
//     console.log(err);
//   }
// };

// start();

//we can promisify the readFile and writeFile functions.The functions contain promises already
const promisifiedReadFile = async () => {
  try {
    const firstPromise = await readFilePromise("./first.txt", "utf8");
    const nextPromise = await readFilePromise("./next.txt", "utf8");
    const anotherPromise = await readFilePromise("./another.txt", "utf8");
    await writeFilePromise(
      "./result.txt",
      firstPromise + nextPromise + anotherPromise
    );
    console.log(firstPromise);
    console.log(nextPromise);
    console.log(anotherPromise);
    console.log(await readFilePromise("./result.txt", "utf8"));
  } catch (error) {
    console.log(error);
  }
};

promisifiedReadFile();
