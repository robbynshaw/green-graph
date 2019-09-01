const csv = require('csv-parser')
const fs = require('fs')


const results = []
const arg = process.argv[2]

console.log(`Processing CSV: '${arg}'`)

function mapper(item, i) {
  let data = {
    payees: [],
    key: i,
  }
  for (let prop in item) {
    if (item.hasOwnProperty(prop)) {
      switch (prop) {
        case "Posting Date":
          data.date = new Date(item[prop])
          break
        case "Check or Slip #":
          data.checkNumber = item[prop]
          break
        default:
          data[prop.toLowerCase()] = item[prop]
          break
      }
    }
  }
  return data
}

let i = 0

fs.createReadStream(arg)
  .pipe(csv())
  .on('data', data => results.push(mapper(data, ++i)))
  .on('end', () => {
    console.log("Data parsed")
    fs.writeFile('results.json', JSON.stringify(results, null, 2), err => {
      if (err) {
        console.error(err)
      } else {
        console.log("Results saved")
      }
    })
  })