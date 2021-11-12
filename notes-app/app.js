
const validator = require('validator')
const chalk = require('chalk')
const sum = require('./utils')
const getNotes = require('./notes')

console.log(sum(2, 6))
console.log(getNotes())

console.log(validator.isURL('https://www.mail.com'))
console.log(chalk.red.bgBlue.bold('Success!'))
console.log(process.argv)

// ค่าที่อยู่หลังจาก run node eg. node app.js add (Section 4 ep.15)
const command = process.argv[2]
if(command === 'add') {
  console.log('Adding note!')
} else if(command === 'remove') {
  console.log('Removing note!')
}