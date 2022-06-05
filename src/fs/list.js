export const list = async () => {
const fs = require('fs');

fs.readdir('./', function (err, list) {
    if (err) console.log('FS operation failed');
    
    console.log(list)
});
};