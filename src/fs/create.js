export const create = async () => {
    const fs = require('fs');

    fs.writeFile('./files/fresh.txt', 'I am fresh and young', function (err){
        if (err) console.log('FS operation failed');
    });
};
