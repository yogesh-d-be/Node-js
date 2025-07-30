const fs = require('fs');

fs.writeFileSync('output.txt', 'This is written by Node');

const data = fs.readFileSync('output.txt', 'utf8');

//utf-8
// Unicode Transformation Format (8-bit).
// It’s a character encoding — a way to convert text (characters) into bytes (which the computer understands).

console.log(data);
