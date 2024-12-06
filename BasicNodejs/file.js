const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

//append file

fs.appendFile('example.txt', 'This is an additional line.', 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File appended successfully.');
});

//existed file
// fs.existsSync('example.txt'  , (err , data) => {
//     if (err) {
//         console.error(err);
//         return;
//       }
//       console.log(data);
// });
if (fs.existsSync(example.txt)) {
    console.log(`The file or directory at '${example.txt}' exists.`);
  } else {
    console.log(`The file or directory at '${example.txt}' does not exist.`);
  }

// rename file
// fs.rename('example.txt', 'example2.txt', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File renamed successfully.');
// });

// //delete file
// fs.unlink('example2.txt', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File deleted successfully.');
// });



