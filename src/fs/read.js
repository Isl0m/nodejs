export const read = async () => {
    const fs = require('fs');

    fs.readFile('./files/fileToRead.txt', function(err, data){
        if(err) console.log("FS operation failed",err);
        console.log(data)
    })
};
