import fs from 'node:fs'

const salut = fs.readFile('coucou.txt', { encoding: 'utf-8' }, (err, text) => {
	console.log(text)
})

console.log(salut)
