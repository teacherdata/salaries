const State = require('./State')
const XLSX = require('../node_modules/xlsx/')
const fs = require('fs')
const states = require('./data/states')

const ranges = {
  current: 'BCDEFGH'.split(''),
  constant: 'IJKLMNO'.split('')
}
const opts = {
	cellFormula: false,
	bookVBA: false,
	cellNF: false,
	cellHTML: false,
	cellStyles: false,
	sheetStubs: false,
	cellDates: false
}

const parseRow = (sheet, stateNum, type) => {
  let series = [];

  ranges[type].forEach(k => {
    series.push(Math.round(sheet[`${k}${stateNum}`].v))
  });

  return series;
}

const parseSheet = sheet => {
  let parsed = []

  states.forEach(state => {
    parsed.push(new State(
      state.slug,
      state.name,
      state.code,
      parseRow(sheet, state.row, 'current'),
      parseRow(sheet, state.row, 'constant')
    ))
  })

  return parsed
}

const saveFile = data => {
  return new Promise((resolve, reject) => {
    const path = 'src/data/stateData.json'

    fs.writeFile(path, JSON.stringify(data), err => {
      if (err) {
        reject(err)
      } else {
        resolve('File saved successfully.')
      }
    })
  })
}

const parser = (filepath, sheet) => {
  return new Promise((resolve, reject) => {
    try {
      const wb = XLSX.readFile('src/211.60.xls', opts)
      const parsed = parseSheet(wb.Sheets[sheet])

      console.log(parsed);

      saveFile(parsed).then((result) => {
        resolve(result)
      }, (err) => {
        reject(err)
      })
    } catch(err) {
      reject(err)
    }
  })
}

module.exports = parser
