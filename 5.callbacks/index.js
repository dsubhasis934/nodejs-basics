
const fs = require("fs");

//define call back

function person(name, callBackFunction) {
  console.log(`my name is ${name}`);
  callBackFunction(); //so basically the callback function is a function
  //which called it at last and after certain task
}

function address() {
  console.log("it my address");
}

person("abc", address); //so here address is my callback function

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;               //so  here (err,data) is a callback function ,after convert the data as utf8 format in input file,
                                        //if there is an err then it throw error otherwise console data
  console.log("data", data);
});
