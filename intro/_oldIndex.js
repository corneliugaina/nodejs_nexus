const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

/** File system memo */
//const { readFile, readFileSync } = require('fs')
// const txt = readFileSync(`./hello.txt`, 'utf-8');
// readFile(`./hello.txt`, 'utf-8', (err, txt) => {
//     console.log(txt)
// })


/** Event emitter memo */
// eventEmitter.on('lunch', () => {
//     console.log("yum yum 🥙")
//     console.log("yum yum 🥙")
// })
// eventEmitter.emit('lunch')


/** Async file reading memo */
// const { readFile } = require('fs').promises 
// async function hello() {
//     const file = await readFile(`./hello.txt`, "utf-8")
//     console.log("file : ", file)
// }
// console.log(hello())


/** Module "import" */
// const myModule = require('./my-module')
// console.log(myModule)


/** Express init */
// const express = require('express');
// const { readFile } = require('fs');
// const app = express()
// app.get('/', (request, response) => {
//     readFile('./home.html', 'utf-8', (err, html) => {
//         if (err) {
//             response.status(500).send('sorry, out of order (server problem -_-°)')
//         }
//         response.send(html)
//     })
// })
// app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`) )