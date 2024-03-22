import fs from 'node:fs/promises'

const content = await fs.readFile('yo.txt', { encoding: 'utf8' })
console.log(content)
