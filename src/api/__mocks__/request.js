const fs = require('fs')

const request = (url) => new Promise((resolve, reject) => {
  const lastSlash = url.lastIndexOf('/')
  const userID = url.substring(lastSlash + 1)
  fs.readFile(`./src/api/__mockData__/${userID}.json`, 'utf8', (err, data) => {
    if (err) reject(err)
    resolve({ entity: JSON.parse(data) })
  })
})

export default request

