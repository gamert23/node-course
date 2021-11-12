const fs =  require('fs')

fs.writeFileSync('notes.txt', 'My name is Game.')

// Append file
fs.appendFileSync('notes.txt', "I'm 27 years old.")