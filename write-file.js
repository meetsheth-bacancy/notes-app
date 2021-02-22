const fs= require('fs')
fs.writeFileSync('demo.txt','Hey there')
require('./append-file.js')