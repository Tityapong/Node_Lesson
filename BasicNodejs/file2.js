const fs = require("fs");

fs.readFile("note3.txt", (err, data) => {
    console.log(err)
    console.log('file exit')
    if(err.errno){
        fs.writeFile("note3.txt", "this is a new file", (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("File written successfully!");
              // file written successfully
            }
          });
    }


  // console.log(data);
});
