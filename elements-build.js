const fs = require('fs-extra');
const concat = require('concat');(async function build() {
    const files = [
        './dist/angular-CRUD/runtime.js',
        './dist/angular-CRUD/polyfills.js',
        './dist/angular-CRUD/scripts.js',
        './dist/angular-CRUD/main.js',
    ]   
     await fs.ensureDir('elements')   
     await concat(files, 'elements/forgot-password.js');    
     await fs.copyFile('./dist/angular-CRUD/styles.css', 'elements/styles.css')    
     await fs.copy('./dist/angular-CRUD/assets/', 'elements/assets/' )
    
})()