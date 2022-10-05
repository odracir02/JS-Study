const fs=require('fs')

let readme = fs.readFileSync("sampletext.txt", "utf8");
console.log(readme)