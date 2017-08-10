const State = require('./State.js')
const XLSX = require('../node_modules/xlsx/')
const fs = require('fs')
const states = require('./data/states.js')

const filepath = './src/data/tabn211.60.xls'
const sheet = 'Digest 2013 Table 211.60'
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
  const path = 'src/data/stateData.json'
  fs.writeFile(path, JSON.stringify(data), err => {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log('SUCCESS')
    }
  })
}

try {
  const wb = XLSX.readFile(filepath, opts)
  const parsed = parseSheet(wb.Sheets[sheet])

  saveFile(parsed)
} catch(e) {
	const msg = ": error parsing " + filepath + ": " + e
	console.error(msg)
	process.exit(3)
}
