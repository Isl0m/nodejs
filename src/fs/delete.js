export const remove = async () => {
    const fs = require('fs');

    fs.remove('./files/fileToRemove.txt',function(err){
        if(err) console.log("FS operation failed")
    })
};