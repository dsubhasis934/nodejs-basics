console.log("in define module logs");

console.log("__filename", __filename); //for gate file name

console.log("__dirname", __dirname); //for gate dir name(folder name)

function displayName(name) {
  console.log(`your name is ${name}`);
}

function displayAge(age) {
  console.log(`your age is ${age}`);
}

module.exports={displayName,displayAge}