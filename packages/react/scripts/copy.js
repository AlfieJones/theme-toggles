const fse = require('fs-extra');
const { rmSync } = require('fs');

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





