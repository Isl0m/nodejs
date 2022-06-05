export const copy = async () => {
    const fs = require('fs');

    fs.copyFile('files', 'files_copy', (err) => {
        if (err) throw err;
        console.log('FS operation failed');
    });
};