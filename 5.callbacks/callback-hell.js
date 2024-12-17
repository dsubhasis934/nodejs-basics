//callback hell

//when we define callback in another callback,its called callback hell

// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{                 //this thing is called callback hell

//         })
//     })
// })

//another example

const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;
  const outputFileData = data?.toUpperCase();
  fs.writeFile("output.txt", outputFileData, (err, data) => {
    if (err) throw err;
    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("data", data);
    });
  });
});
