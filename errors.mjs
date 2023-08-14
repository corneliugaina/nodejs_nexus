import { readFile } from "fs/promises"

// we'll try do synchronous code here, in order to throw error. 


// synch error : try/catch : 
// try {
//     const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
// } catch (e) {
//     throw e
// }


// way to catch mostyl all errors 
process.on("uncaughtException", (e) => {
    console.log(e)
})

fs.readFile(filePath, (error, result) => {
  if (error) {
    // do something
  } else {
    // yaaay
  }
})


// promise (async error)
const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
    .catch(e => {
        console.log(e)
    })

console.log("hello")