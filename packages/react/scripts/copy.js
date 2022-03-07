const fse = require('fs-extra');
const { readdirSync, rename, rmSync, readFile, writeFile } = require('fs');
const { resolve } = require('path');

const srcDir = `./../../assets/svgs`;

                              
function copy(destDir) {
  rmSync(destDir, { recursive: true, force: true });
  fse.copySync(srcDir, destDir, {overwrite: true}, function (err) {
    if (err) {                 
      console.error(err);
    } else {
      console.log("success!");
    }
  });
}





copy("./svgs/default");

copy("./svgs/reversed");




// Get path to image directory
const imageDirPath = resolve(__dirname, '../svgs/reversed');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

files.forEach(file => readFile(imageDirPath + `/${file}`, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  data = data.replace(/(.)(?<=class=".+?")/, "-reversed\"")
  writeFile(imageDirPath + `/${file}`, data, function(err) {
    err;
  });
  rename(
    imageDirPath + `/${file}`,
    imageDirPath + `/${file.slice(0, -4)}-reversed.svg`,
    err => err && console.log(err)
  )
}))





