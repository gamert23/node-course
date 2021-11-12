
const validator = require('validator')
const chalk = require('chalk')
const sum = require('./utils')
const getNotes = require('./notes')

console.log(sum(2, 6))
console.log(getNotes())

console.log(validator.isURL('https://www.mail.com'))
console.log(chalk.green.bgRedBright.bold('Success!'))