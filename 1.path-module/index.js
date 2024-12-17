const path=require('path') //this module by default present in mode

console.log("dirname",path.dirname(__filename))


console.log("path join",path.join('/users','abc','cdf')) //for joining the path

console.log("path resolve",path.resolve('/users','abc','cdf')) //for resolve the path