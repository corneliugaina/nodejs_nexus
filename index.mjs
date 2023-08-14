import { readFile, writeFile } from 'fs/promises'

// if console.logged, will output a buffer (string), and with urt-8 designed parameter, will output the whole html
let template = await readFile(new URL('template.html', import.meta.url), 'utf-8') // 
    
const data = {
    title: "Testing Node.js",
    body: "This is the final HTML"
}

// return a tuple, array of key/value
for (const [k, v] of Object.entries(data)) {
    template = template.replace(`{${k}}`, v)
}

// once executed, will output a index.html file newly created on the hard disk
await writeFile(new URL('index.html', import.meta.url), template)

