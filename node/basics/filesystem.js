import fs from "node:fs"

// let data=fs.readFileSync('sample.txt','utf-8')
// fs.writeFileSync('sample2.txt','this is sample file')
// console.log(data)
fs.appendFileSync('sample.txt','\n appened data')


