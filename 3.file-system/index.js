const fs = require("fs"); //this for work with file system

const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder); //if this folder not exits then it will be created
}

const filepath = path.join(dataFolder, "example.txt"); //it used for create a file

fs.writeFileSync(filepath, "welcome form file system file");

const readContentFromFile = fs.readFileSync(filepath, "utf8"); //this function for read contents from a file

fs.appendFileSync(filepath, "\n this is another piece of code ");

console.log("content from file", readContentFromFile);

//async way of file System

const asyncFilePath = path.join(dataFolder, "async-file.txt");

fs.writeFile(asyncFilePath, "this is async file data", (err) => {
  if (err) {
    throw err;
  }
  console.log("async file created");
});

fs.readFile(asyncFilePath, "utf8", (err, data) => {
  if (err) throw new Error("invalid text");
  console.log("your data is", data);
});
