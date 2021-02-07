const fs = require('fs');
const { argv } = require('process');

const arguments = argv.slice(2,);

const regexIndex = arguments.findIndex(argument => argument === '--regex');
const fileIndex = arguments.findIndex(argument => argument === '--file');

const isRegexExists = regexIndex > -1
const isFileExists = fileIndex > -1


if(!isRegexExists){
    throw new Error('please enter your regex')
}

if(!isFileExists){
    throw new Error('please enter your file')
}


const file = arguments[fileIndex + 1]
const regex = new RegExp(arguments[regexIndex + 1]);

const fileList = fs.readFileSync(file , 'utf-8' ).split('\n');


const editedFile = fileList.filter(line => !regex.test(line)).join('\n')

fs.writeFileSync(file , editedFile);
