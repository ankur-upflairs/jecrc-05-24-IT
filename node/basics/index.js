let a=34
console.log(a)
//ejs => ecma script js
//cjs => common js

// const module1=require('./module1.js')
// console.log(module1.x,module1.y(2,3))

//if you want to use ejs then add type module in package.json
// import x from "./EJSmodule.js"
// import {y,z} from "./EJSmodule.js"

// console.log(x,y(3,4),z.name)
//built in modules
//own modules
//3rd party modules => npm 

// import chalk from "chalk"
// console.log(chalk.green("hello world"))

//built in modules => core modules
import os from "node:os"
import path from "node:path"

console.log(os.totalmem())

