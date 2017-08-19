const getter = require('./getter')
const parser = require('./parser')

const filepath = '211.60.xls'
const sheet = 'Digest 2013 Table 211.60'

const getFile = () => {
  getter(filepath).then((result) => {
    console.log(result)
  }, (err) => {
    console.log(err)
  })
}

const parseFile = () => {
  parser(filepath, sheet).then((result) => {
    console.log(result)
  }, (err) => {
    console.log(err)
  })
}

getFile()
parseFile()
