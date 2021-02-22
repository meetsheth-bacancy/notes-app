const fs = require('fs');

const dataBuffer = fs.readFileSync('sample.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Meet';
data.age = 21;
const newDataJson = JSON.stringify(data);

fs.writeFileSync('sample.json',newDataJson)