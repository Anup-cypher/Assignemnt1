
const fs = require('fs');
const promisifyReadFile = (filePath, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (error, data) => {
            if (data) {
                resolve(data);
            } else {
                reject(error);
            }
        })
    });
}
console.log(promisifyReadFile('./assignment/assignment.txt', 'utf8')
    .then(data => console.log(data)).catch(error => console.log(error)));
