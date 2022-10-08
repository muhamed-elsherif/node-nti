const fs = require("fs")

const custom = require("./newMod")
const validator = require ("validator")
const chalk = require("chalk")

// fs.mkdirSync("mohamed")

// fs.writeFileSync(`${__dirname}//mohamed/new.txt`,"Hello Node Js")

// for (let index = 0; index < 50; index++) {
    
//     fs.rmdirSync(`mohamed ${index}`)
// }

// phone = validator.isMobilePhone("01045789632","ar-EG")
// console.log(phone)


// postal = validator.isPostalCode("22755", "any")
// console.log(postal)

const name = 'Mohamed';
console.log(chalk.red(`hello ${name}`));