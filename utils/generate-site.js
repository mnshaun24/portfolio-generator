const fs = require("fs");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                // return out to stop from proceeding
                return;
            }

            // if no err, resolve and send to '.then'
            ok: true,
            message: "File created!"
        });
    });
};

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};