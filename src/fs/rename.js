export const rename = async () => {
    var fs = require('fs');
    fs.rename('./files/wrongFilename.txt', './files/wrongFilename.md', function(err) {
            if ( err ) console.log('FS operation failed');    
    });
 
};