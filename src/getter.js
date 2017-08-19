const fs = require('fs')
const request = require('request')

const filepath = 'https://nces.ed.gov/programs/digest/d13/tables/xls/tabn211.60.xls'

const getter = (file) => {
  return new Promise((resolve, reject) => {
    request
      .get(filepath)
      .on('error', function(err) {
        reject(`Error downloading raw file: ${err}`)
      })
      .pipe(
        fs.createWriteStream(file).on('error', (err) => {
          reject(`Error saving raw file: ${err}`)
        })
      )
  })
}

module.exports = getter

