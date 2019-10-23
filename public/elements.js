const fs  =require('fs-extra');
const concat = require('concat');

(async function build() {
   const files =[
       './dist/angular-CRUD/runtime.js',
       './dist/angular-CRUD/polyfills.js',
       './dist/angular-CRUD/scripts.js',
       './dist/angular-CRUD/main.js',
       
   ] ;

   await fs.ensureDir('elements');
   await concat(files,'public/elements.js');
})();