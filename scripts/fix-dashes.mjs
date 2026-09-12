import fs from 'node:fs'

const path = 'src/content.js'
let s = fs.readFileSync(path, 'utf8')

// Replace common mojibake / replacement-char sequences with ASCII hyphen
s = s.replace(/\uFFFD\?/g, ' - ')
s = s.replace(/\uFFFD/g, '-')
s = s.replace(/â€”/g, ' - ')
s = s.replace(/â€“/g, '-')
s = s.replace(/\u2014/g, ' - ')
s = s.replace(/\u2013/g, '-')

fs.writeFileSync(path, s)
console.log('Normalized dashes in content.js')
